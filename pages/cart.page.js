class Cart {
    get productCost() { return $('.meta') }
    get subTotal() { return $("//div[@class='ui large clearing segment']/span") }
}

module.exports = new Cart()