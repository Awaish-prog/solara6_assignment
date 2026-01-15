@authenticated
Feature: User profile management

  As a logged-in user
  I want to access my profile and update my personal details
  So that my account information stays up to date

  Scenario: Navigate to user profile from dashboard
    When the user opens their profile
    Then the user should be navigated to the user profile page

  Scenario: Update user name on user profile
    Given the user is on the user profile page
    When the user updates their name
    Then the updated name should be saved successfully
