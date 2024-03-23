const {test, expect} = require('../../fixture/app.fixture');
const {urls, credentials, tags} = require("../../utils/constant");
const {faker} = require("@faker-js/faker");

const {email, password} = credentials;
const {loginPageUrl, adminPageUrl} = urls;

test.beforeAll(async ({loginPage}) => {
    await loginPage.goto();
    await loginPage.enterCredentialsAndLogin(email, password);
});

test.afterAll(async ({}) => {
    // here will be clean up code to remove created publisher by API request
    // POST /admin/api/resources/Publisher/records/${recordId}/delete
});

test('User can create new publisher and then see it on Publisher table', {tag: tags.UI}, async ({sideBarWidget, publisherTablePage, createNewPublisherPage}) => {
    const email = faker.internet.email();
    await sideBarWidget.happyFolderOption.click();
    await sideBarWidget.publisherOption.click();
    await publisherTablePage.createNewButton.click();
    await createNewPublisherPage.emailInput.fill(email);
    await createNewPublisherPage.saveButton.click();
    await publisherTablePage.tableRow.first().waitFor({timeout: 5000});
    const textArray = await publisherTablePage.getTableRowsEmails();
    expect(textArray).toContain(email);
});
