import LoginScreen from "../../../screenobjects/android/login.screen";
import ProductScreen from "../../../screenobjects/android/product.screen";
import Gesture from "../../../utils/gesture";
import ProductDetailScreen from "../../../screenobjects/android/product-detail.screen";
import CartScreen from "../../../screenobjects/android/cart.screen";
import CheckoutScreen from "../../../screenobjects/android/checkout.screen";
import { faker } from '@faker-js/faker';

describe('Product Test', ()=>{
    it('Add products to cart successfully', async ()=>{
        await LoginScreen.login('standard_user', 'secret_sauce')
        await expect(ProductScreen.productTitle).toBeDisplayed();
        await ProductScreen.openProduct('Sauce Labs Backpack')
        await Gesture.scrollUntilTextVisible('ADD TO CART')
        await ProductDetailScreen.clickAddToCartBtn()
        await ProductDetailScreen.clickBackBtn()
        await driver.pause(10000)
        await ProductScreen.clickAddToCartBtn()
        await ProductScreen.clickCartBtn()
       
        await Gesture.scrollUntilTextVisible('CHECKOUT')
        await CartScreen.clickCheckoutBtn()
        console.log('Start filling checkout address')
        await CheckoutScreen.fillFistname(faker.person.firstName())
        await CheckoutScreen.fillLastname(faker.person.lastName())
        await CheckoutScreen.fillZipcode(faker.location.zipCode())
        await Gesture.scrollUntilTextVisible('CONTINUE')
        await CheckoutScreen.clickContinueBtn()
        await Gesture.scrollUntilTextVisible('FINISH')
        await CheckoutScreen.clickFinishBtn()
        await expect(CheckoutScreen.checkoutSuccessLabel).toBeDisplayed()
    });
});