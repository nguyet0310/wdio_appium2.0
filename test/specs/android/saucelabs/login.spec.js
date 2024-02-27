import LoginScreen from "../../../screenobjects/android/login.screen";
import ProductScreen from "../../../screenobjects/android/product.screen";

describe('Login Test', ()=>{
    it('Login successfully', async ()=>{
        await LoginScreen.login('standard_user', 'secret_sauce')
        await expect(ProductScreen.productTitle).toBeDisplayed();
    });
});