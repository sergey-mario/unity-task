const { urls } = require( '../../utils/constant');

export class CreateNewProfilePage {
    constructor(page) {
        this.page = page;
        this.bioInput = page.locator('#bio');
        this.publisherInput = page.locator('[aria-autocomplete="list"]');
        this.publisherOption = page.locator('[id^="react-select"]');
        this.saveButton = page.getByTestId('button-save');
        this.errorMessage = page.locator('.adminjs_MessageBox');
    }

    async goto() {
        await this.page.goto(urls.newProfileUrl);
    }

    async selectPublisher(email) {
        await this.publisherInput.pressSequentially(email, { delay: 200 });
        await this.publisherOption.getByText(email).click();
    }
}
