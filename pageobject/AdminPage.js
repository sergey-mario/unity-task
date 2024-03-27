const { urls } = require('../utils/constant');

export class AdminPage {
    constructor(page) {
        this.page = page;
        this.welcomeHeader = page.locator('h2.adminjs_H2');
    }

    async goto() {
        await this.page.goto(urls.adminPageUrl);
    }
}
