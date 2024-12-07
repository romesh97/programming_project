describe("create-pet-post spec", () => {
  const mockToken = "mock-petsite-token";

  beforeEach(() => {
    // Increase default command timeout
    Cypress.config("defaultCommandTimeout", 15000);

    // Mock authentication context
    cy.intercept("GET", "**/auth/session", {
      statusCode: 200,
      body: { token: mockToken },
    }).as("authSession");

    // Visit the create post page
    cy.visit("/profile/posts");

    // Wait for page to load
    cy.get("form").should("exist");
  });

  it("should compile all the required fields", () => {
    const requiredFields = [
      {
        name: "name",
        selector: 'input[name="name"]',
        type: "text",
      },
      {
        name: "age",
        selector: 'input[name="age"]',
        type: "number",
      },
      {
        name: "weight",
        selector: 'input[name="weight"]',
        type: "number",
      },
      {
        name: "title",
        selector: 'input[name="title"]',
        type: "text",
      },
      {
        name: "location",
        selector: 'input[name="location"]',
        type: "text",
      },
      {
        name: "gender",
        selector: '[name="gender"]',
        type: "select",
        checkVisibility: ($item: any) => {
          // For MUI Select, check the parent or label
          cy.wrap($item).parent().should("be.visible").and("contain", "Gender");
        },
      },
      {
        name: "description",
        selector: 'textarea[name="description"]',
        type: "textarea",
      },
      {
        name: "breed",
        selector: 'input[name="breed"]',
        type: "text",
      },
    ];

    requiredFields.forEach((field) => {
      // Custom handling for gender select
      if (field.name === "gender") {
        cy.get(field.selector, { timeout: 10000 }).should("exist");

        // Check parent label or container visibility
        cy.get(field.selector)
          .parent()
          .should("be.visible")
          .and("contain", "Gender");

        return;
      }

      // input field checks
      cy.get(field.selector, { timeout: 10000 })
        .should("be.visible")
        .and("have.attr", "required");

      // type checks for number inputs
      if (field.type === "number") {
        cy.get(field.selector).should("have.attr", "type", "number");
      }
    });

    // Verify submit button
    cy.get('button[type="submit"]', { timeout: 10000 })
      .should("be.visible")
      .and("contain", "Create Post");
  });
});
