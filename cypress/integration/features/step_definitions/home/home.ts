import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open Google home page", () => {
  cy.visit("https://www.google.com/");
});

Then(`I see {string} in the title`, (title: string) => {
  cy.title().should("include", title);
});
