const { urls } = require( '../../utils/constant');

export class CreateNewPostPage {
    constructor(page) {
        this.page = page;
        this.titleInput = page.locator('#title');
        this.addNewItemButton = page.getByTestId('someJson-add');
        this.jsonNumberInput = page.locator('[id*="number"]');
        this.jsonStringInput = page.locator('[id*="string"]');
        this.jsonBooleanCheckbox = page.getByTestId('property-edit-someJson.0.boolean').locator('a');
        this.jsonDateInput = page.locator('.react-datepicker__input-container input');
        this.statusInput = page.getByTestId('property-edit-status').locator('div.adminjs_Select');
        this.publishedCheckbox = page.getByTestId('property-edit-published').locator('a');
        this.publisherInput = page.locator('[data-testid="property-edit-publisher"] input');
        this.publisherOption = page.locator('[id^="react-select"]');
        this.saveButton = page.getByTestId('button-save');
        this.errorMessage = page.locator('.adminjs_MessageBox');
    }

    async goto() {
        await this.page.goto(urls.newPostUrl);
    }

    async selectStatus(status) {
        await this.statusInput.click();
        await this.publisherOption.getByText(status, { exact: true }).click();
    }

    async selectPublisher(email) {
        await this.publisherInput.pressSequentially(email, { delay: 200 });
        await this.publisherOption.getByText(email).click();
    }
}
