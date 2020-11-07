Feature: Validate XHR routing

  Background:
    Given I open REQRES home page
  
  @xhr
  Scenario: Home Page Check
    Then I see "Reqres" in the title