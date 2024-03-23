const {test, expect} = require('../../fixture/app.fixture');
const {urls, credentials, tags} = require("../../utils/constant");
const {faker} = require("@faker-js/faker");

const {email, password} = credentials;
const {loginPageUrl, adminPageUrl} = urls;

test.beforeEach(async ({loginPage}) => {
    await loginPage.goto();
});

test('User can login with valid credentials', {tag: tags.UI}, async ({page, loginPage, adminPage}) => {
    await loginPage.emailInput.fill(email);
    await loginPage.passwordInput.fill(password);
    await loginPage.loginButton.click();
    await expect(page).toHaveURL(adminPageUrl);
    await expect(await adminPage.getWelcomeHeaderTextContent()).toBe('Welcome, Candidate!');
});

test('User see error if login with invalid credentials', {tag: tags.UI}, async ({page, loginPage, adminPage}) => {
    await loginPage.enterCredentialsAndLogin(faker.internet.email(), faker.internet.password());
    await expect(page).toHaveURL(loginPageUrl);
    await expect(await loginPage.unityImage.isVisible()).toBeTruthy;
});
