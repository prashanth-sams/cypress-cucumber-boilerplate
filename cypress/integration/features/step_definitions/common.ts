import { Before, After } from "cypress-cucumber-preprocessor/steps";

Before({ tags: "@home" }, () => {
  cy.log("before @home scenario");
});

After({ tags: "@home" }, () => {
  cy.log("after @home scenario");
});
