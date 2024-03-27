const { BaseClient } = require('./BaseClient');

export class PostApi extends BaseClient{
    async getPostList() {
        const res = await this.axiosInstance.get('/admin/api/resources/Post/actions/list');
        return res;
    }

    async deletePostById(id) {
        const res = await this.axiosInstance.post(`/admin/api/resources/Post/records/${id}/delete`);
        return res;
    }
}
