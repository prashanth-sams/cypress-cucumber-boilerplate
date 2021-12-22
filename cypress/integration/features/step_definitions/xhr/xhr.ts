import { Given } from "cypress-cucumber-preprocessor/steps";
import XHRTest from "../../pages/xhr/xhr_page";

Given("I open REQRES home page", () => {
  XHRTest.visit();
});
