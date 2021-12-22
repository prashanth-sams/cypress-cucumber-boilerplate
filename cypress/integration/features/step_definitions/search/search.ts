import { When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchPage from "../../pages/search/search_page";

When("I search for {string}", (keyword: string) => {
  SearchPage.search(keyword);
});

Then("I verify the result for {string}", (result: string) => {
  cy.contains(result);
  cy.xpath('//*[@id="center_col"]').should("exist");
});
