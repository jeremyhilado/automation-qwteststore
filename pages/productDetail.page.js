class ProductDetail {
    get addToCartButton() { return $('button') }
    get cart() { return $('//a[3]/div') }
    get homePageLink() { return $("//div[@class='ui text container']/a") }

    clickAddToCartButton() {
        this.addToCartButton.waitForDisplayed()
        this.addToCartButton.click()
    }

    clickHomePageLink() {
        this.homePageLink.waitForDisplayed()
        this.homePageLink.click()
    }
}

module.exports = new ProductDetail()