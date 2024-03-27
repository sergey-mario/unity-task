const { credentials, cookieFileName, authFileName } = require('../utils/constant');
const { test } = require('../fixture/app.fixture');
const fs = require('fs');

test('Login and save browser state in local file', async ({ app, page }) => {
    await app.loginPage.goto();
    const cookie = await app.loginPage.loginAndGetCookie(credentials.email, credentials.password);
    fs.writeFileSync(cookieFileName, cookie);
    await page.context().storageState({ path: authFileName });
});
