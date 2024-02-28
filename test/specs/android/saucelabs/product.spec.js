import LoginScreen from "../../../screenobjects/android/login.screen";
import ProductScreen from "../../../screenobjects/android/product.screen";
import Gesture from "../../../utils/gesture";
import ProductDetailScreen from "../../../screenobjects/android/product-detail.screen";
import CartScreen from "../../../screenobjects/android/cart.screen";
import CheckoutScreen from "../../../screenobjects/android/checkout.screen";
import { faker } from '@faker-js/faker';

describe('Product Test', ()=>{
    it('Add products to cart successfully', async ()=>{
        // Login to app
        await LoginScreen.login('standard_user', 'secret_sauce')
        // Assert that product page display
        await expect(ProductScreen.productTitle).toBeDisplayed();
        // Open a product with name and then add this product to cart
        await ProductScreen.openProduct('Sauce Labs Backpack')
        await Gesture.scrollUntilTextVisible('ADD TO CART')
        await ProductDetailScreen.clickAddToCartBtn()
        // Back to product list page
        await ProductDetailScreen.clickBackBtn()
        await driver.pause(10000)
        // Add second product to cart
        await ProductScreen.clickAddToCartBtn()
        // Go to cart
        await ProductScreen.clickCartBtn()
       
        await Gesture.scrollUntilTextVisible('CHECKOUT')
        // Check out product
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