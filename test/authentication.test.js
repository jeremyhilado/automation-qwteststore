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
        }, 10000, 'expect url to change')
        expect(browser.getUrl()).equals('https://qw-test-store-prod.netlify.app/myaccount/')
    })

    it('should get login details error message', () => {
        myAccountPage.clickSignOutButton()
        browser.waitUntil(() => {
            return browser.getUrl() === 'https://qw-test-store-prod.netlify.app/login/'
        }, 10000, 'expect url to change')
        loginPage.enterEmail('desk@desk.com')
        loginPage.enterPassword('1desk')
        loginPage.clickLoginButton()
        loginPage.loginErrorMessage.waitForDisplayed()
        assert('Please check your login details and try again.', loginPage.loginErrorMessage.getText())
    })

    it('should get password required error message', () => {
        browser.url('/')
        homePage.clickSignInButton()
        loginPage.enterEmail('desk@desk.com')
        loginPage.clickLoginButton()
        loginPage.passwordRequiredMessage.waitForDisplayed()
        assert('Password is required', loginPage.passwordRequiredMessage.getText())
    })
})