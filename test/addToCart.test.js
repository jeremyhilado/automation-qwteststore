const { assert } = require('chai')
const homePage = require('../pages/home.page')
const productDetailPage = require('../pages/productDetail.page')
const cartPage = require('../pages/cart.page')
const loginPage = require('../pages/login.page')
const myaccountPage = require('../pages/myaccount.page')

describe('Add To Cart Tests', function() {
    it('should add 1 item to cart', () => {
        browser.url('/')
        homePage.clickProduct(1)
        productDetailPage.clickAddToCartButton()
        browser.waitUntil(() => {
            return productDetailPage.cart.getText() === 'Cart (1)'
        }, 5000, 'expect cart qty to update')
        assert.equal('Cart (1)', productDetailPage.cart.getText())
    })

    it('should add a 2nd item to cart', () => {
        productDetailPage.clickHomePageLink()
        homePage.clickProduct(2)
        productDetailPage.clickAddToCartButton()
        browser.waitUntil(() => {
            return productDetailPage.cart.getText() === 'Cart (2)'
        }, 5000, 'expect cart qty to update')
        assert.equal('Cart (2)', productDetailPage.cart.getText())
    })

    it('should add same item multiple times', () => {
        browser.reloadSession()
        browser.url('/')
        homePage.clickProduct(1)
        productDetailPage.clickAddToCartButton()
        browser.waitUntil(() => {
            return productDetailPage.cart.getText() === 'Cart (1)'
        }, 5000, 'expect cart qty to update')
        productDetailPage.clickHomePageLink()
        homePage.clickProduct(1)
        productDetailPage.clickAddToCartButton()
        browser.waitUntil(() => {
            return productDetailPage.cart.getText() === 'Cart (2)'
        }, 5000, 'expect cart qty to update')
        assert.equal('Cart (2)', productDetailPage.cart.getText())
    })

    it('product price should be the same on details page and cart screen', () => {
        browser.reloadSession()
        browser.url('/')
        homePage.clickProduct(1)
        productDetailPage.clickAddToCartButton()
        browser.waitUntil(() => {
            return productDetailPage.cart.getText() === 'Cart (1)'
        }, 5000, 'expect cart qty to update')
        productDetailPage.clickCart()
        assert.equal('1x $325.00', cartPage.productCost.getText())
        assert.equal('Sub total: $325.00', cartPage.subTotal.getText())
    })

    it('cart should not change after sign out or sign in', () => {
        browser.reloadSession()
        browser.url('/')
        homePage.clickSignInButton()
        loginPage.enterEmail('desk@desk.com')
        loginPage.enterPassword('desk1')
        loginPage.clickLoginButton()
        browser.waitUntil(() => {
            return browser.getUrl() === 'https://qw-test-store-prod.netlify.app/myaccount/'
        }, 5000, 'expect url to change')
        myaccountPage.clickHomePageLink()
        homePage.clickProduct(1)
        productDetailPage.clickAddToCartButton()
        browser.waitUntil(() => {
            return productDetailPage.cart.getText() === 'Cart (1)'
        }, 5000, 'expect cart qty to update')
        productDetailPage.clickSignOutButton()
        productDetailPage.clickSignInButton()
        loginPage.enterEmail('desk@desk.com')
        loginPage.enterPassword('desk1')
        loginPage.clickLoginButton()
        browser.waitUntil(() => {
            return browser.getUrl() === 'https://qw-test-store-prod.netlify.app/myaccount/'
        }, 5000, 'expect url to change')
        myaccountPage.clickCart()
        assert.equal('1x $325.00', cartPage.productCost.getText())
        assert.equal('Sub total: $325.00', cartPage.subTotal.getText())
    })
})