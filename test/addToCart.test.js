const { assert } = require('chai')
const homePage = require('../pages/home.page')
const productDetailPage = require('../pages/productDetail.page')

describe('Add To Cart', function() {
    it('should add 1 item to cart', () => {
        browser.url('/')
        homePage.clickProduct(1)
        productDetailPage.clickAddToCartButton()
        assert('Cart (1)', productDetailPage.cart.getText())
    })

    it('should add a 2nd item to cart', () => {
        productDetailPage.clickHomePageLink()
        homePage.clickProduct(2)
        productDetailPage.clickAddToCartButton()
        assert('Cart (2)', productDetailPage.cart.getText())
    })

    it('should add same item multiple times', () => {
        browser.reloadSession()
        browser.url('/')
        homePage.clickProduct(1)
        productDetailPage.clickAddToCartButton()
        productDetailPage.clickHomePageLink()
        homePage.clickProduct(1)
        productDetailPage.clickAddToCartButton()
        assert('Cart (2)', productDetailPage.cart.getText())
    })
})