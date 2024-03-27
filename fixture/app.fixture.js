const base = require('@playwright/test');
const { App } = require('../pageobject/App');

exports.test = base.test.extend({
    app: async ({ page }, use) => {
        await use(new App(page));
    }
});
exports.expect = base.expect;
