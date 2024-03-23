exports.CreateNewPublisherPage = class CreateNewPublisherPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.saveButton = page.getByTestId('button-save');
    }
};
