const { test, expect } = require('../../../fixture/app.fixture');
const { tags, authFileName, urls } = require('../../../utils/constant');
const { PublisherApi } = require('../../../api/PublisherApi');
const { faker } = require('@faker-js/faker');

let publisherApi;
const publisherEmail = faker.internet.email();

test.use({ storageState: authFileName });

test.beforeAll(async () => {
    publisherApi = new PublisherApi();
    await publisherApi.createPublisher(publisherEmail);
});

test.describe('Delete Publisher positive', async () => {
    test('User can delete existed publisher', { tag: tags.UI }, async ({ app }) => {
        await app.publisherTablePage.goto();
        await app.publisherTablePage.actionButtonByRowValue(publisherEmail).hover();
        await app.tableActionButtonsWidget.clickDelete(publisherEmail);
        await app.removeItemPopupWidget.confirmButton.click();
        expect(await app.publisherTablePage.message.textContent()).toBe('Successfully deleted given record');
    });
});
