import { Before, After } from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
  cy.clearLocalStorage();
  cy.clearCookies();
});

Before({ tags: "@home" }, () => {
  cy.log("before @home scenario");
});

After({ tags: "@home" }, () => {
  cy.log("after @home scenario");
});

afterEach(() => {
  cy.log("after each hook");
});
