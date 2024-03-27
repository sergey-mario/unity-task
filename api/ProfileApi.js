const { BaseClient } = require('./BaseClient');

export class ProfileApi extends BaseClient{
    async getProfileList() {
        const res = await this.axiosInstance.get('/admin/api/resources/Profile/actions/list');
        return res;
    }

    async deleteProfileById(id) {
        const res = await this.axiosInstance.post(`/admin/api/resources/Profile/records/${id}/delete`);
        return res;
    }

    async createProfile(publisherId, bio = '') {
        const res = await this.axiosInstance.post('admin/api/resources/Profile/actions/new', {
            publisher: publisherId,
            bio
        });
        return res;
    }
}
