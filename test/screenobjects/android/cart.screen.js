class CartScreen {
    get checkoutBtn(){
        return $('~test-CHECKOUT');
    }

    async clickCheckoutBtn(){
        await this.checkoutBtn.click()
    }
}

export default new CartScreen();