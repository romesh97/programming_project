describe("edit-pet-post spec", () => {
  // Mock authentication token
  const mockToken = "mock-petsite-token";
  const mockPostId = "test-post-123";

  // Mock post data to simulate API response
  const mockPostData = {
    data: {
      name: "Cooper",
      age: "3",
      weight: "25",
      title: "Playful Pup",
      location: "Dublin 03",
      gender: "Male",
      contact: "0899524782",
      breed: "Golden Retriever",
      profileImage:
        "https://console.firebase.google.com/project/emerald-eon-438919-g7/storage/emerald-eon-438919-g7.appspot.com/files/~2Fpets",
    },
  };

  beforeEach(() => {
    // Mock authentication context
    cy.intercept("GET", "**/auth/session", {
      statusCode: 200,
      body: { token: mockToken },
    }).as("authSession");

    // Mock post data fetch
    cy.intercept("GET", `**/getPostById/${mockPostId}`, {
      statusCode: 200,
      body: mockPostData,
    }).as("fetchPostData");

    // Visit the edit post page
    cy.visit(`/profile/posts/${mockPostId}`);

    // Wait for page to load
    cy.wait("@fetchPostData");
  });

  it("should render all required form fields with correct initial values", () => {
    const requiredFields = [
      {
        name: "name",
        selector: 'input[name="name"]',
        expectedValue: mockPostData.data.name,
        type: "text",
      },
      {
        name: "age",
        selector: 'input[name="age"]',
        expectedValue: mockPostData.data.age,
        type: "number",
      },
      {
        name: "weight",
        selector: 'input[name="weight"]',
        expectedValue: mockPostData.data.weight,
        type: "text",
      },
      {
        name: "title",
        selector: 'input[name="title"]',
        expectedValue: mockPostData.data.title,
        type: "text",
      },
      {
        name: "location",
        selector: 'input[name="location"]',
        expectedValue: mockPostData.data.location,
        type: "text",
      },
      {
        name: "gender",
        selector: '[name="gender"]',
        expectedValue: mockPostData.data.gender,
        type: "select",
      },
      {
        name: "contact",
        selector: '[name="contact"]',
        expectedValue: mockPostData.data.contact,
        type: "text",
      },
      {
        name: "breed",
        selector: 'input[name="breed"]',
        expectedValue: mockPostData.data.breed,
        type: "text",
      },
    ];

    // Check page title
    cy.contains("Edit Post").should("be.visible");

    requiredFields.forEach((field) => {
      // Check input fields
      if (field.name === "gender") {
        // Special handling for select field
        cy.get(field.selector).should("have.value", field.expectedValue);
      } else {
        cy.get(field.selector, { timeout: 10000 })
          .should("be.visible")
          .and("have.value", field.expectedValue)
          .and("have.attr", "required");
      }
    });

    // Verify submit button
    cy.get('button[type="submit"]')
      .should("be.visible")
      .and("contain", "Update Post");
  });

  it("should successfully update post", () => {
    // Mock the update API call
    cy.intercept("PUT", `**/updatePost/${mockPostId}`, {
      statusCode: 200,
      body: { message: "Post updated successfully" },
    }).as("updatePost");

    // test a field
    cy.get('input[name="name"]').clear().type("Updated Name Field");

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Wait for and verify the update call
    cy.wait("@updatePost")
      .its("request.body")
      .then((body) => {
        cy.wrap(body.get("name")).should("equal", "Updated Buddy");
      });

    cy.url().should("include", "/profile");
  });
});
