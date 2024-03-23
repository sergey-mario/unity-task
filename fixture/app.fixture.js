const base = require('@playwright/test');
const { LoginPage } = require('../pageobject/LoginPage');
const { AdminPage } = require('../pageobject/AdminPage');
const { SideBarWidget } = require('../pageobject/SideBarWidget');
const { PublisherTablePage } = require('../pageobject/publisher/PublisherTablePage');
const { CreateNewPublisherPage } = require('../pageobject/publisher/CreateNewPublisherPage');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    adminPage: async ({ page }, use) => {
        await use(new AdminPage(page));
    },
    sideBarWidget: async ({ page }, use) => {
        await use(new SideBarWidget(page));
    },
    publisherTablePage: async ({ page }, use) => {
        await use(new PublisherTablePage(page));
    },
    createNewPublisherPage: async ({ page }, use) => {
        await use(new CreateNewPublisherPage(page));
    },
});
exports.expect = base.expect;
