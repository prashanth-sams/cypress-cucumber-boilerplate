Feature: Validate Google Search Page

  Background:
    Given I open Google home page
  
  @search
  Scenario Outline: Search Page Check
    Then I see "Google" in the title
    When I search for "<keyword>"
    Then I verify the result for "<result>"

    Examples:
      | keyword             | result          |
      | Jesus Christ        | God             |
      | Prashanth Sams      | Prashanth Sams  |