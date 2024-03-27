export class CreateNewAndFilterWidget {
    constructor(page) {
        this.page = page;
        this.createNewButton = page.getByTestId('action-new').first();
    }
}
