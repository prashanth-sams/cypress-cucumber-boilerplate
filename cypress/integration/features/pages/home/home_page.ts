class HomePage {
  static visit() {
    cy.visit("https://www.google.com/");
    cy.url().should("include", "google.com");
  }
}

export default HomePage;
