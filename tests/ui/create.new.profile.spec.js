const { test, expect } = require('../../fixture/app.fixture');
const { tags, authFileName } = require('../../utils/constant');
const { PublisherApi } = require('../../api/PublisherApi');
const { faker } = require('@faker-js/faker');
const { ProfileApi } = require('../../api/ProfileApi');

let publisherApi;
let profileApi;
let publisherId;
const bio = faker.string.alpha({ length: 10 });
const publisherEmail = faker.internet.email();

test.use({ storageState: authFileName });

test.beforeAll(async () => {
    publisherApi = new PublisherApi();
    profileApi = new ProfileApi();

    const publisher = await publisherApi.createPublisher(publisherEmail);
    publisherId = publisher.data.record.id;
});

test.afterAll(async () => {
    const profileList = await profileApi.getProfileList();
    const profileId = profileList.data.records.find(el => el.params.bio === bio).id;
    await profileApi.deleteProfileById(profileId);
    await publisherApi.deletePublisherById(publisherId);
});

test.describe('Create new Profile positive', async () => {
    test('User can create new Profile and then see it on Profile table', { tag: tags.UI }, async ({ app }) => {
        await app.adminPage.goto();
        await app.sideBarWidget.happyFolder.click();
        await app.sideBarWidget.profileOption.click();
        await app.createNewAndFilterWidget.createNewButton.click();
        await app.createNewProfilePage.bioInput.fill(bio);
        await app.createNewProfilePage.selectPublisher(publisherEmail);
        await app.createNewProfilePage.saveButton.click();
        await app.profileTablePage.waitForProfileTableIsVisible();
        const text = await app.profileTablePage.getProfileRowTextContent(publisherEmail);
        expect.soft(text).toContain(bio);
        expect.soft(text).toContain(publisherEmail);
    });
});

test.describe('Create new Profile negative', async () => {
    test('User cant create Profile with blank "publisher" field and see error', { tag: tags.UI }, async ({ app }) => {
        await app.createNewProfilePage.goto();
        await app.createNewProfilePage.bioInput.fill(faker.string.alpha({ length: 10 }));
        await app.createNewProfilePage.saveButton.click();
        expect(await app.createNewProfilePage.errorMessage.textContent())
            .toContain('There was an error updating record, Check out console to see more information.');
    });
});
