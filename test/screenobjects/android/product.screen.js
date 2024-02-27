class ProductScreen{
    get productTitle(){
        return $('//android.widget.TextView[@text="PRODUCTS"]');
    }

    get addToCartBtn(){
        return $('//android.widget.TextView[@text="ADD TO CART"]');
    }

    get cartBtn(){
        return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView')
    }

    async getProduct(productName){
        return $(`//android.widget.TextView[@content-desc="test-Item title" and @text="${productName}"]`)
    }

    async openProduct(productName){
        (await this.getProduct(productName)).click()
    }

    async clickAddToCartBtn(){
        await this.addToCartBtn.click()
    }

    async clickCartBtn(){
        await this.cartBtn.click()
    }
}

export default new ProductScreen();