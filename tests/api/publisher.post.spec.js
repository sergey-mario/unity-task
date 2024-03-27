const { test, expect } = require('../../fixture/app.fixture');
const { tags, authFileName } = require('../../utils/constant');
const { PublisherApi } = require('../../api/PublisherApi');
const { faker } = require('@faker-js/faker');

let publisherApi;
let publisherId;
const email = faker.internet.email();
const name = faker.string.alpha({ length: 10 });

test.beforeAll(async () => {
    publisherApi = new PublisherApi();
});

test.afterEach(async () => {
    if (publisherId) {
        await publisherApi.deletePublisherById(publisherId);
    }
});

test.describe('POST Publisher', async () => {
    test('should succeed if pass in "name" and "email"', { tag: tags.API }, async ({ app }) => {
        const res = await publisherApi.createPublisher(email, name);
        publisherId = res.data.record.id;
        expect(res.status).toEqual(200);
        expect(res.data.record.params.email).toEqual(email);
        expect(res.data.record.params.name).toEqual(name);
        expect(publisherId).toBeDefined();
    });

    test('should succeed if pass in only "email"', { tag: tags.API }, async ({ app }) => {
        const res = await publisherApi.createPublisher(email);
        publisherId = res.data.record.id;
        expect(res.status).toEqual(200);
        expect(res.data.record.params.email).toEqual(email);
        expect(res.data.record.params.name).toBeFalsy();
        expect(publisherId).toBeDefined();
    });
});
