exports.AdminPage = class AdminPage {
    constructor(page) {
        this.page = page;
        this.welcomeHeader = page.locator('h2.adminjs_H2');
    }

    async getWelcomeHeaderTextContent() {
        const text = await this.welcomeHeader.textContent();
        return text;
    }
};
