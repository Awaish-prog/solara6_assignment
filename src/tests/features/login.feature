Feature: Login

    Scenario: Successful login
    Given the user is on the login page
    When the user logs in with valid credentials
    Then the user should see the dashboard

    Scenario: Login fails when account does not exist
    Given the user is on the login page
    When the user logs in with a non-existent account
    Then the error message "No customer account found" should be shown

  Scenario: Login fails when password is incorrect
    Given the user is on the login page
    When the user logs in with an incorrect password
    Then the error message "The credentials provided are incorrect" should be shown