const { test, expect } = require('../../fixture/app.fixture');
const { tags, authFileName, urls } = require('../../utils/constant');

const { loginPageUrl, adminPageUrl } = urls;

test.use({ storageState: authFileName });

test('User can logout', { tag: tags.UI }, async ({ app }) => {
    await app.adminPage.goto();
    await app.userLoggedWidget.loggedSection.hover();
    await app.userLoggedWidget.logoutButton.click();
    await expect(app.loginPage.page).toHaveURL(loginPageUrl);
    await expect(await app.loginPage.unityImage.isVisible()).toBeTruthy;
});
