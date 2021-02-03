class MyAccount {
    get signOutButton() { return $("//div[contains(@class, 'menu')]/a[2]") }

    clickSignOutButton() {
        this.signOutButton.waitForDisplayed()
        this.signOutButton.click()
    }
}

module.exports = new MyAccount()