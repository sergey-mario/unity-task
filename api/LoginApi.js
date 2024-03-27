import { urls } from '../utils/constant';

const { BaseClient } = require('./BaseClient');

export class LoginApi extends BaseClient{
    async login(email, password) {
        const res = await this.axiosInstance.post(urls.loginPageUrl, { email, password });
        return res;
    }
}
