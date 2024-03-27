export class TableActionButtonsWidget {
    constructor(page) {
        this.page = page;
        this.deleteAction = (rowValue) => page.locator('[data-css*="table-row"]', { hasText: rowValue })
            .getByRole('link', { name: 'Delete' });
    }

    async clickDelete(rowValue) {
        await this.deleteAction(rowValue).click();
    }
}
