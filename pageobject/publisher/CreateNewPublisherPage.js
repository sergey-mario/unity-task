const { urls } = require( '../../utils/constant');

export class CreateNewPublisherPage {
    constructor(page) {
        this.page = page;
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.saveButton = page.getByTestId('button-save');
    }

    async goto() {
        await this.page.goto(urls.newPublisherUrl);
    }

    async getError() {
        await this.page.getByText('Please fill in this field.').waitFor();
    }

}
