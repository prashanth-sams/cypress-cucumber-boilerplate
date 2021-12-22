/// <reference path="../../../../support/index.d.ts" />

class XHRTest {
  static visit() {
    cy.listenRoute("GET", "/api/users?page=2", "getroute");
    cy.visit("https://reqres.in");
    cy.wait("@getroute");
  }
}

export default XHRTest;
