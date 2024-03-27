const { test, expect } = require('../../fixture/app.fixture');
const { tags, authFileName, urls } = require('../../utils/constant');
const { PublisherApi } = require('../../api/PublisherApi');
const { faker } = require('@faker-js/faker');
const { ProfileApi } = require('../../api/ProfileApi');

let publisherApi;
let profileApi;
let publisherId;
let profileId;
const bio = faker.string.alpha({ length: 10 });
const email = faker.internet.email();

test.beforeAll(async () => {
    publisherApi = new PublisherApi();
    profileApi = new ProfileApi();

    const publisher = await publisherApi.createPublisher(email);
    publisherId = publisher.data.record.id;
});

test.afterEach(async () => {
    if (profileId){
        await profileApi.deleteProfileById(profileId);
    }
});

test.afterAll(async () => {
    if (publisherId) {
        await publisherApi.deletePublisherById(publisherId);
    }
});

test.describe('POST Profile', async () => {
    test('should succeed if pass in "bio" and "publisher"', { tag: tags.API }, async ({ app }) => {
        const res = await profileApi.createProfile(publisherId, bio);
        profileId = res.data.record.params.id;
        expect(res.status).toEqual(200);
        expect(res.data.record.params.bio).toEqual(bio);
        expect(res.data.record.params.publisher).toEqual(publisherId);
        expect(profileId).toBeDefined();
    });

    test('should succeed if pass in only "publisher"', { tag: tags.API }, async ({ app }) => {
        const res = await profileApi.createProfile(publisherId);
        profileId = res.data.record.params.id;
        expect(res.status).toEqual(200);
        expect(res.data.record.params.bio).toBeFalsy();
        expect(res.data.record.params.publisher).toEqual(publisherId);
        expect(profileId).toBeDefined();
    });
});
