class ProductDetailScreen {
    get backBtn(){
        return $('~test-BACK TO PRODUCTS');
    }

    get addToCartBtn(){
        return $('//android.widget.TextView[@text="ADD TO CART"]');
    }

    async clickBackBtn(){
        (await this.backBtn).click()
    }

    async clickAddToCartBtn(){
        (await this.addToCartBtn).click()
    }

}

export default new ProductDetailScreen();