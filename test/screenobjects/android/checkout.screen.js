class CheckoutScreen {
    get firstnameTxt(){
        return $('~test-First Name');
    }
    get lastnameTxt(){
        return $('~test-Last Name');
    }

    get zipCodeTxt(){
        return $('~test-Zip/Postal Code');
    }

    get continueBtn(){
        return $('~test-CONTINUE');
        
    }
    get finishBtn(){
        return $('~test-FINISH');
        
    }
    get checkoutSuccessLabel(){
        return $('//android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]');
    }

    async fillFistname(firstname){
    try{
        (await this.firstnameTxt).setValue(firstname)
    
    } catch (error) {
        console.error('Error in fillCheckoutAddress:', error);
    }
    }
    async fillLastname(lastname){

        (await this.lastnameTxt).setValue(lastname) 
    }

    async fillZipcode(zipcode){

        (await this.zipCodeTxt).setValue(zipcode) 
    }


    async clickContinueBtn(){
        await this.continueBtn.click()
    }

    async clickFinishBtn(){
        await this.finishBtn.click()
    }
}

export default new CheckoutScreen();