class Cart {
    get productCost() { return $('.meta') }
    get subTotal() { return $("//div[@class='ui large clearing segment']/span") }
    get checkoutButton() { return $("//button[text()='Check out']") } 
    get emailInput() { return $("//input[@placeholder='Email']") }
    get nameInput() { return $("//input[@placeholder='Name']") }
    get streetInput() { return $("//input[@placeholder='Street']") }
    get cityInput() { return $("//input[@placeholder='City']") }
    get zipCodeInput() { return $("//input[@placeholder='ZIP Code']") }
    get paymentInfoButton() { return $("//button[@type='submit']") }
    get cardNumberInput() { return $("//input[@placeholder='Card number']") }
    get cardExpirationInput() { return $("//input[@placeholder='MM / YY']") }
    get cvcInput() { return $("//input[@placeholder='CVC']") }
    get payButton() { return $("//button[@type='submit']")}
    get orderSuccessMessage() { return $("//div[text()='Your placed!']") } 
    get iFrame() { return $("//iframe[@name='stripe_checkout_app']") }

    clickCheckoutButton() {
        this.checkoutButton.waitForDisplayed()
        this.checkoutButton.click()
    }

    enterEmail(text) {
        this.emailInput.waitForDisplayed()
        this.emailInput.setValue(text)
    }

    enterName(text) {
        this.nameInput.waitForDisplayed()
        this.nameInput.setValue(text)
    }

    enterStreet(text) {
        this.streetInput.waitForDisplayed()
        this.streetInput.setValue(text)
    }

    enterCity(text) {
        this.cityInput.waitForDisplayed()
        this.cityInput.setValue(text)
    }

    enterZipCode(text) {
        this.zipCodeInput.waitForDisplayed()
        this.zipCodeInput.setValue(text)
    }

    clickPaymentInfoButton() {
        this.paymentInfoButton.waitForDisplayed()
        this.paymentInfoButton.click()
    }

    enterCardNumber(text) {
        this.cardNumberInput.waitForDisplayed()
        this.cardNumberInput.setValue(text)
    }

    enterCardExpiration(text) {
        this.cardExpirationInput.waitForDisplayed()
        this.cardExpirationInput.setValue(text)
    }

    enterCVC(text) {
        this.cvcInput.waitForDisplayed()
        this.cvcInput.setValue(text)
    }

    clickPayButton() {
        this.payButton.waitForDisplayed()
        this.payButton.click()
    }
}

module.exports = new Cart()