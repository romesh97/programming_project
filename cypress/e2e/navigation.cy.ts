describe("Next.js Navigation Tests", () => {
  const routes = [
    { path: "/", name: "Home Page" },
    { path: "/profile", name: "Profile Page", requiresAuth: true },
    { path: "/profile/posts", name: "Create Post Page", requiresAuth: true },
    { path: "/auth/login", name: "Login Page" },
    { path: "/auth/signup", name: "Signup Page" },
    { path: "/about", name: "About Page" },
  ];

  //  navigation tests
  routes.forEach((route) => {
    it(`should render ${route.name} using Next.js routing`, () => {
      cy.visit(route.path);

      // Check URL
      cy.url().should("include", route.path);

      // Verify Next.js page is loaded
      cy.get("body").should("be.visible");
    });
  });
});
