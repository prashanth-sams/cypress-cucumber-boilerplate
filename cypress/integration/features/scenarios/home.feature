Feature: Validate Google Home Page

  Background:
    Given I open Google home page
  
  @home
  Scenario: Home Page Check
    Then I see "Google" in the title