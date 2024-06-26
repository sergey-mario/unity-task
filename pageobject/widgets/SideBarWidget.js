export class SideBarWidget {
    constructor(page) {
        this.page = page;
        this.happyFolder = page.locator('a').filter({ hasText: 'Happy Folder' });
        this.publisherOption = page.locator('a[href*="Publisher"]');
        this.profileOption = page.locator('a[href*="Profile"]');
        this.postOption = page.locator('a[href*="Post"]');
    }
}
