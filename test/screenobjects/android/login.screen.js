class LoginScreen{
    get usernameTxt(){
        return $('~test-Username');
    }

    get passwordTxt(){
        return $('~test-Password');
    }

    get submitBtn(){
        return $('~test-LOGIN');
    }

    async login(username, password){
        (await this.usernameTxt).setValue(username);
        await this.passwordTxt.setValue(password);
        (await this.submitBtn).click()
    }

}

export default new LoginScreen();