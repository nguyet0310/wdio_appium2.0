# Android Automation with WebDriverIO - README

## Overview

This README provides guidelines and setup instructions for automating tests for the Android application `Android.SauceLabs.Mobile.Sample.app.2.7.1.apk` using WebDriverIO with the Page Object Model (POM) design pattern.

## Why WebDriverIO?

WebDriverIO is a popular choice for automating both web and mobile applications due to its flexible configuration, easy syntax, and compatibility with both Android and iOS platforms. Key benefits include:

1. **Synchronous and Asynchronous Execution**: WebDriverIO allows for both synchronous and asynchronous execution of commands, making test scripts easier to write and understand. Its async mode, combined with JavaScript's async/await syntax, simplifies handling asynchronous operations.

2. **Page Object Model Support**: WebDriverIO supports the Page Object Model, which promotes code reuse and maintainability. POM encapsulates page details and behaviors, leading to more manageable and readable tests.

3. **Community and Ecosystem**: WebDriverIO has a large and active community, providing a wealth of plugins, integrations, and support resources. This ecosystem enhances its capabilities and simplifies the integration with other tools.

4. **Comprehensive Documentation**: Detailed and well-structured documentation makes learning and troubleshooting easier for new and experienced users alike.

5. **Integration with Appium**: WebDriverIO seamlessly integrates with Appium for mobile automation, offering a powerful solution for testing Android and iOS applications.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- Java Development Kit (JDK) - version 8 or newer
- Android Studio and Android SDK for running emulators
- Appium for driving the Android application automation

### Installation

1. **Install Node.js**:
   Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

2. **Install Appium**:
   ```bash
   npm install -g appium
   ```

3. **Install WebDriverIO CLI**:
   ```bash
   npm install -g @wdio/cli
   ```
4. **Clone code from repo**:


### Setting Up the Project

1. **Configure WebDriverIO**:
   Follow the prompts to set up WebDriverIO with Appium. When asked for the test runner, select `Mocha`. For the framework, choose `Appium`, and specify `Android` as the platform.

2. **Page Object Model**:
   Organize your test code using the Page Object Model.
   - **Page Objects**: Create JavaScript classes for each screen of your application under `screenobjects/android`. These classes should encapsulate the selectors and actions that can be performed on the screens.

   - **Specs**: Write your test specifications under `specs/android/saucelabs`, utilizing the page objects to interact with the application.



### Running Tests Locally

Execute your tests by running:

```bash
`npx wdio`
```

### Generate Report

You can see the test report running locally: `npm run report`.

## Conclusion

Using WebDriverIO for automating the `Android.SauceLabs.Mobile.Sample.app.2.7.1.apk` application offers a robust, flexible, and efficient solution for ensuring application quality. The combination of WebDriverIO and the Page Object Model enhances test maintainability, readability, and reusability, making it an excellent choice for mobile application testing.