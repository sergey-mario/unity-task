const {urls} = require("../utils/constant");

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button.adminjs_Button');
        this.unityImage = page.getByRole('img', { name: 'Unity Task' })
    }

    async goto() {
        await this.page.goto(urls.loginPageUrl);
    }

    async enterCredentialsAndLogin(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
};
