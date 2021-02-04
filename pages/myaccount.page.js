class MyAccount {
    get signOutButton() { return $("//div[contains(@class, 'menu')]/a[2]") }
    get homePageLink() { return $("//div[@class='ui text container']/a") }
    get cart() { return $("//a[@href='/cart/']")}

    clickSignOutButton() {
        this.signOutButton.waitForDisplayed()
        this.signOutButton.click()
    }

    clickHomePageLink() {
        this.homePageLink.waitForDisplayed()
        this.homePageLink.click()
    }

    clickCart() {
        this.cart.waitForDisplayed()
        this.cart.click()
    }
}

module.exports = new MyAccount()