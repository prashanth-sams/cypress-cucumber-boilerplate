import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pages/home/home_page";

Given("I open Google home page", () => {
  HomePage.visit();
  // cy.percySnapshot('home')
});

Then(`I see {string} in the title`, (title: string) => {
  cy.title().should("include", title);
});
