export class ProfileTablePage {
    constructor(page) {
        this.page = page;
        this.tableRow = page.locator('[data-css="Profile-table-row"]');
        this.tableRowByValue = (value) => page.locator(`//a[contains(text(), '${value}')]/ancestor::tr`);
    }

    async waitForProfileTableIsVisible() {
        await this.tableRow.first().waitFor({ timeout: 5000 });
    }

    async getProfileRowTextContent(searchValue) {
        const text = await this.tableRowByValue(searchValue).textContent();
        return text;
    }
}
