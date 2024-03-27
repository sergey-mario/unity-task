export class PostTablePage {
    constructor(page) {
        this.page = page;
        this.tableRow = page.locator('[data-css="Post-table-row"]');
        this.tableRowByValue = (value) => page.locator(`//section[contains(text(), '${value}')]/ancestor::tr`);
    }

    async waitForPostTableIsVisible() {
        await this.tableRow.first().waitFor({ timeout: 5000 });
    }

    async getPostRowTextContent(searchValue) {
        const text = await this.tableRowByValue(searchValue).textContent();
        return text;
    }
}
