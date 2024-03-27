const { BaseClient } = require('./BaseClient');

export class PublisherApi extends BaseClient{
    async getPublishersList() {
        const res = await this.axiosInstance.get('/admin/api/resources/Publisher/actions/list');
        return res;
    }

    async deletePublisherById(id) {
        const res = await this.axiosInstance.post(`/admin/api/resources/Publisher/records/${id}/delete`);
        return res;
    }

    async createPublisher(email, name = '') {
        const res = await this.axiosInstance.post('/admin/api/resources/Publisher/actions/new', { email, name });
        return res;
    }
}
