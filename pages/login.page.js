class Login {
    get emailInput() { return $('#email') }
    get passwordInput() { return $('#password') }
    get loginButton() { return $("//*[@type='submit']") }
    get loginErrorMessage() { return $('.content p:nth-child(2)') }
    get passwordRequiredMessage() { return $("//p[text()='Password is required']") }
    get emailRequiredMessage() { return $("//p[text()='Email address is required']") }

    enterEmail(text) {
        this.emailInput.waitForDisplayed()
        this.emailInput.setValue(text)
    }

    enterPassword(text) {
        this.passwordInput.waitForDisplayed()
        this.passwordInput.setValue(text)
    }

    clickLoginButton() {
        this.loginButton.waitForDisplayed()
        this.loginButton.click()
    }
}

module.exports = new Login()