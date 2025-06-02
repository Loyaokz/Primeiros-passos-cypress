import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorlist = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: " .oxd-topbar-header-breadcrumb-module ",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    fisrtNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    nickNameField: ".oxd-input--active",

  }
  


  it.only('User info update - Sucess', () => {
    cy.visit('/auth/login');
    cy.get(selectorlist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorlist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorlist.dashboardGrid)
    
  })
  it('Login - Failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type(userData.userfail.username)
    cy.get(selectorlist.passwordField).type(userData.userfail.password)
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredentialAlert)
  })
})