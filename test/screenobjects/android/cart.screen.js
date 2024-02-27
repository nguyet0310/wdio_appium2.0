class CartScreen {
    get checkoutBtn() {
        return $('~test-CHECKOUT');
    }
    /**
     * Click on checkout button
     */
    async clickCheckoutBtn() {
        await this.checkoutBtn.click()
    }
}

export default new CartScreen();