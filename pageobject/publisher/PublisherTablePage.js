exports.PublisherTablePage = class PublisherTablePage {
    constructor(page) {
        this.page = page;
        this.createNewButton = page.getByTestId('action-new');
        this.tableRow = page.locator('[data-css="Publisher-table-row"]');
        this.emailRow = page.getByTestId('property-list-email');
    }

    async getTableRowsEmails() {
        const emailRows = await this.emailRow.all();
        const emails = await Promise.all(emailRows.map(async row => {
            return await row.textContent();
        }));
        return emails;
    }
};
