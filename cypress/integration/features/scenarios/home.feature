Feature: Validate Google Home Page

  Background:
    Given I am on the homepage
  
  @focus
  Scenario: Home Page Check
    Then I see "Google" in the title