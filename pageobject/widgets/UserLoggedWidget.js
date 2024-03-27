export class UserLoggedWidget {
    constructor(page) {
        this.page = page;
        this.loggedSection = page.locator('[data-css="logged-in"]');
        this.logoutButton = page.locator('a', { hasText: 'Log out' });
    }
}
