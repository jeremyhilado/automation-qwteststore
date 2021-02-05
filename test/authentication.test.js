const loginPage = require('../pages/login.page')
const homePage = require('../pages/home.page')
const myAccountPage = require('../pages/myaccount.page')
const { assert } = require('chai')

describe('Authentication Tests', function() {
    it('should login with valid email and valid password', () => {
        browser.url('/')
        homePage.clickSignInButton()
        loginPage.enterEmail('desk@desk.com')
        loginPage.enterPassword('desk1')
        loginPage.clickLoginButton()
        browser.waitUntil(() => {
            return browser.getUrl() === 'https://qw-test-store-prod.netlify.app/myaccount/'
        }, 5000, 'expect url to change')
        expect(browser.getUrl()).equals('https://qw-test-store-prod.netlify.app/myaccount/')
    })

    it('should get login details error message', () => {
        myAccountPage.clickSignOutButton()
        browser.waitUntil(() => {
            return browser.getUrl() === 'https://qw-test-store-prod.netlify.app/login/'
        }, 5000, 'expect url to change')
        loginPage.enterEmail('desk@desk.com')
        loginPage.enterPassword('1desk')
        loginPage.clickLoginButton()
        loginPage.loginErrorMessage.waitForDisplayed()
        assert.equal('Please check your login details and try again.', loginPage.loginErrorMessage.getText())
    })

    it('should get password required error message', () => {
        browser.url('/')
        homePage.clickSignInButton()
        loginPage.enterEmail('desk@desk.com')
        loginPage.clickLoginButton()
        loginPage.passwordRequiredMessage.waitForDisplayed()
        assert.equal('Password is required', loginPage.passwordRequiredMessage.getText())
    })

    it('should get email required error message', () => {
        browser.url('/')
        homePage.clickSignInButton()
        loginPage.enterPassword('desk1')
        loginPage.clickLoginButton()
        loginPage.emailRequiredMessage.waitForDisplayed()
        assert.equal('Email address is required', loginPage.emailRequiredMessage.getText())
    })    

    it('should get email and password required error messages', () => {
        browser.url('/')
        homePage.clickSignInButton()
        loginPage.clickLoginButton()
        loginPage.emailRequiredMessage.waitForDisplayed()
        loginPage.passwordRequiredMessage.waitForDisplayed()
        assert.equal('Email address is required', loginPage.emailRequiredMessage.getText())
        assert.equal('Password is required', loginPage.passwordRequiredMessage.getText())
    })
})