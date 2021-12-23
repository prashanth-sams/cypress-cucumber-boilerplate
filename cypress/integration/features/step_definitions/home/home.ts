import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pages/home/home_page";
import { Environments } from '../../../../support/functions';

const url = new Environments().getEnv();

Given("I open Google home page", () => {
  HomePage.visit(url);
});

Then(`I see {string} in the title`, (title: string) => {
  cy.title().should("include", title);
});
