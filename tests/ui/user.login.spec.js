const { test, expect } = require('../../fixture/app.fixture');
const { urls, credentials, tags } = require('../../utils/constant');
const { faker } = require('@faker-js/faker');

const { email, password } = credentials;
const { loginPageUrl, adminPageUrl } = urls;

test.beforeEach(async ({ app }) => {
    await app.loginPage.goto();
});

test.describe('User login positive flow', async () => {
    test('User can login with valid credentials', { tag: tags.UI }, async ({ app }) => {
        await app.loginPage.enterCredentialsAndLogin(email, password);
        await expect(app.loginPage.page).toHaveURL(adminPageUrl);
        await expect(await app.adminPage.welcomeHeader.textContent()).toEqual('Welcome, Candidate!');
    });
});

test.describe('User login negative flow', async () => {
    test('User stays on Login page if enter invalid credentials', { tag: tags.UI }, async ({ app }) => {
        await app.loginPage.enterCredentialsAndLogin(faker.internet.email(), faker.internet.password());
        await expect(app.loginPage.page).toHaveURL(loginPageUrl);
        await expect(await app.loginPage.unityImage.isVisible()).toBeTruthy;
    });

    const dataProvider = [
        {
            testTitle: 'credentials as empty string',
            email: '',
            password: ''
        },
        {
            testTitle: 'email as empty string',
            email: '',
            password: password
        },
        {
            testTitle: 'password as empty string',
            email: email,
            password: ''
        }
    ];

    for (const { testTitle, email, password } of dataProvider) {
        test(`User stays on Login page if enter ${testTitle}`, { tag: tags.UI }, async ({ app }) => {
            await app.loginPage.enterCredentialsAndLogin(email, password);
            await expect(app.loginPage.page).toHaveURL(loginPageUrl);
            await expect(await app.loginPage.unityImage.isVisible()).toBeTruthy;
        });
    }
});
