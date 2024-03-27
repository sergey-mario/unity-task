const { test, expect } = require('../../../fixture/app.fixture');
const { tags, authFileName, urls } = require('../../../utils/constant');
const { PublisherApi } = require('../../../api/PublisherApi');
const { faker } = require('@faker-js/faker');

const publisherEmail = faker.internet.email();

test.use({ storageState: authFileName });

test.afterAll(async () => {
    const publisherApi = new PublisherApi();
    const publisherList = await publisherApi.getPublishersList();
    const publisherId = publisherList.data.records.find(el => el.params.email === publisherEmail).id;
    await publisherApi.deletePublisherById(publisherId);
});

test.describe('Create new Publisher positive', async () => {
    test('User can create new Publisher and then see it on Publisher table', { tag: tags.UI }, async ({ app }) => {
        await app.adminPage.goto();
        await app.sideBarWidget.happyFolder.click();
        await app.sideBarWidget.publisherOption.click();
        await app.createNewAndFilterWidget.createNewButton.click();
        await app.createNewPublisherPage.emailInput.fill(publisherEmail);
        await app.createNewPublisherPage.saveButton.click();
        await app.publisherTablePage.waitForPublisherTableIsVisible();
        const textArray = await app.publisherTablePage.getTableRowsEmails();
        expect(textArray).toContain(publisherEmail);
    });
});

test.describe('Create new Publisher negative', async () => {
    test('User can not create new Publisher with blank "email" field', { tag: tags.UI }, async ({ app }) => {
        await app.createNewPublisherPage.goto();
        await app.createNewPublisherPage.nameInput.fill(faker.string.alpha({ length: 10 }));
        await app.createNewPublisherPage.saveButton.click();
        expect(await app.createNewPublisherPage.emailInput.isVisible()).toBeTruthy();
        expect(app.createNewPublisherPage.page).toHaveURL(urls.newPublisherUrl);
    });
});
