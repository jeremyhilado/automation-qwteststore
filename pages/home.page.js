class Home {
    get signInButton() { return $("//a[@href='/login/']") }

    clickSignInButton() {
        this.signInButton.waitForDisplayed()
        this.signInButton.click()
    }
}

module.exports = new Home()