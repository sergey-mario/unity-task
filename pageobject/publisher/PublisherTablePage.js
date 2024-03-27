import { urls } from '../../utils/constant';

export class PublisherTablePage {
    constructor(page) {
        this.page = page;
        this.tableRow = page.locator('[data-css="Publisher-table-row"]');
        this.emailRow = page.getByTestId('property-list-email');
        this.actionButtonByRowValue = (value) => page.locator('[data-css="Publisher-table-row"]', { hasText: value })
            .getByTestId('actions-dropdown');
        this.message = page.locator('.adminjs_MessageBox');
    }

    async goto() {
        await this.page.goto(urls.publisherTableUrl);
    }

    async getTableRowsTextContent() {
        const emails = await this.emailRow.allTextContents();
        return emails;
    }

    async getTableRowsEmails() {
        const emails = await this.emailRow.allTextContents();
        return emails;
    }

    async waitForPublisherTableIsVisible() {
        await this.tableRow.first().waitFor({ timeout: 5000 });
    }
}
