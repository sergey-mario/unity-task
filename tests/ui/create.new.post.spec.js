const { test, expect } = require('../../fixture/app.fixture');
const { tags, authFileName, urls } = require('../../utils/constant');
const { PublisherApi } = require('../../api/PublisherApi');
const { faker } = require('@faker-js/faker');
const moment = require('moment');
const { PostApi } = require('../../api/PostApi');

let publisherApi;
let postApi;
let publisherId;
const publisherEmail = faker.internet.email();
const postTitle = `Title ${faker.string.alpha({ length: 10 })}`;
const jsonNumber = faker.string.numeric({ length: 5 });
const jsonString = `String ${faker.string.alpha({ length: 10 })}`;
const todayDate = moment();
const postStatus = 'ACTIVE';

test.use({ storageState: authFileName });

test.beforeAll(async () => {
    publisherApi = new PublisherApi();
    postApi = new PostApi();
    const publisher = await publisherApi.createPublisher(publisherEmail);
    publisherId = publisher.data.record.id;
});

test.afterAll(async () => {
    const postList = await postApi.getPostList();
    const postId = postList.data.records.find(el => el.params.title === postTitle).id;
    await postApi.deletePostById(postId);
    await publisherApi.deletePublisherById(publisherId);
});

test.describe('Create new Post positive', async () => {
    test('User can create new Post and then see it on Post table', { tag: tags.UI }, async ({ app }) => {
        await app.adminPage.goto();
        await app.sideBarWidget.happyFolder.click();
        await app.sideBarWidget.postOption.click();
        await app.createNewAndFilterWidget.createNewButton.click();
        await app.createNewPostPage.titleInput.fill(postTitle);
        await app.createNewPostPage.addNewItemButton.click();
        await app.createNewPostPage.jsonNumberInput.fill(jsonNumber);
        await app.createNewPostPage.jsonStringInput.fill(jsonString);
        await app.createNewPostPage.jsonBooleanCheckbox.click();
        await app.createNewPostPage.jsonDateInput.fill(todayDate.format('YYYY/MM/DD HH:mm'));
        await app.createNewPostPage.selectStatus(postStatus);
        await app.createNewPostPage.publishedCheckbox.click();
        await app.createNewPostPage.selectPublisher(publisherEmail);
        await app.createNewPostPage.saveButton.click();
        await app.postTablePage.waitForPostTableIsVisible();
        const text = await app.postTablePage.getPostRowTextContent(postTitle);
        expect.soft(text).toContain(postTitle);
        expect.soft(text).toContain(todayDate.format('YYYY-MM-DD'));
        expect.soft(text).toContain(postStatus);
        expect.soft(text).toContain('Length: 1');
    });
});

test.describe('Create new Post negative', async () => {
    test('User cant create new Post with blank Title, Status and Publisher fields', { tag: tags.UI },
        async ({ app }) => {
            await app.createNewPostPage.goto();
            await app.createNewPostPage.saveButton.click();
            expect.soft(await app.createNewPostPage.titleInput.isVisible()).toBeTruthy();
            expect.soft(app.createNewPostPage.page).toHaveURL(urls.newPostUrl);

            await app.createNewPostPage.titleInput.fill(postTitle);
            await app.createNewPostPage.saveButton.click();
            expect(await app.createNewPostPage.errorMessage.textContent())
                .toContain('There was an error updating record, Check out console to see more information.');
        });
});
