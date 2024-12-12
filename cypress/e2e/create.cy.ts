describe("create-pet-post spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/login");
    cy.get('input[name="email"]').type("romeshperera97@gmail.com");
    cy.get('input[name="password"]').type("Test@123");
    cy.get('button[type="submit"]').click();
    cy.wait(4000);
    // Visit the create post page
    cy.visit("/profile/posts");

    // Wait for page to load
    cy.get("form").should("exist");
  });

  it("should verify all the required fields are visible", () => {
    // cy.wait(5000);
    cy.get('input[name="name"]').should("exist").and("be.visible");
    cy.get('input[name="age"]').should("exist").and("be.visible");
    cy.get('input[name="weight"]').should("exist").and("be.visible");
    cy.get('input[name="title"]').should("exist").and("be.visible");
    cy.get('input[name="location"]').should("exist").and("be.visible");
    cy.get('input[name="contact"]').should("exist").and("be.visible");
    cy.get('input[name="breed"]').should("exist").and("be.visible");
    cy.get('input[name="gender"]').should("exist");
    cy.get('button[type="submit"]').should("exist").and("be.visible");
  });

  it("should allow user to input values", () => {
    cy.get('input[name="name"]').type("Buddy");
    cy.get('input[name="age"]').type("3");
    cy.get('input[name="weight"]').type("20");
    cy.get('input[name="title"]').type("Friendly Dog");
    cy.get('input[name="location"]').type("New York");
    cy.get('div[role="combobox"]').click();
    cy.get('li[data-value="Male"]').click();
    cy.get('input[name="contact"]').type("1234567890");
    cy.get('input[name="breed"]').type("Labrador");
    cy.get('button[type="submit"]').click();
  });
});
