class HomePage {
  static visit(_url: String) {
    cy.visit(_url + "/");
    cy.url().should("include", "google.com");
  }
}

export default HomePage;
