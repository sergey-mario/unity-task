export class RemoveItemPopupWidget {
    constructor(page) {
        this.page = page;
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.confirmButton = page.getByRole('button', { name: 'Confirm' });
    }
}
