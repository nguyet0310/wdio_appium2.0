class Gesture {

        async scrollUntilTextVisible(text) {
            const selector = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`;
            await $(selector);
          }

}
export default new Gesture();