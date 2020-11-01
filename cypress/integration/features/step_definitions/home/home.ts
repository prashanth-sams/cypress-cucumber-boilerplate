import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the homepage", () => {
  cy.visit("https://www.google.ae/");
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});
