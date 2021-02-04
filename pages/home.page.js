class Home {
    get signInButton() { return $("//a[@href='/login/']") }
    specificProduct(index) { return $(`//a[@class='ui card'][${index}]`) }

    clickSignInButton() {
        this.signInButton.waitForDisplayed()
        this.signInButton.click()
    }

    clickProduct(index) {
        this.specificProduct(index).waitForDisplayed()
        this.specificProduct(index).click()
    }
}

module.exports = new Home()