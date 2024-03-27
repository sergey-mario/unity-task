const { urls } = require('../utils/constant');

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button.adminjs_Button');
        this.unityImage = page.getByRole('img', { name: 'Unity Task' });
    }

    async goto() {
        await this.page.goto(urls.loginPageUrl);
    }

    async enterCredentialsAndLogin(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginAndGetCookie(email, password) {
        const reqPromise = this.page.waitForRequest(
            (req) => req.url().includes(urls.loginPageUrl) && req.method() === 'POST'
        );
        await this.enterCredentialsAndLogin(email, password);
        await this.page.waitForLoadState('networkidle');
        const req = await reqPromise;
        const cookie = await req.headerValue('cookie');
        return cookie;
    }
}
