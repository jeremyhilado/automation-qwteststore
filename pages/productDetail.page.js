class ProductDetail {
    get addToCartButton() { return $('button') }
    get cart() { return $('//a[3]/div') }
    get homePageLink() { return $("//div[@class='ui text container']/a") }
    get signOutButton() { return $("//a[@class='item'][2]") }
    get signInButton() { return $("//a[@href='/login/']") } 

    clickAddToCartButton() {
        this.addToCartButton.waitForDisplayed()
        this.addToCartButton.click()
    }

    clickHomePageLink() {
        this.homePageLink.waitForDisplayed()
        this.homePageLink.click()
    }

    clickCart() {
        this.cart.waitForDisplayed()
        this.cart.click()
    }

    clickSignOutButton() {
        this.signOutButton.waitForDisplayed()
        this.signOutButton.click()
    }

    clickSignInButton() {
        this.signInButton.waitForDisplayed()
        this.signInButton.click()
    }
}

module.exports = new ProductDetail()