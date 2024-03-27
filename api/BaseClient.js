const { cookieFileName } =  require('../utils/constant') ;
const axios = require('axios');
const { urls } = require('../utils/constant');
const fs = require('fs');

export class BaseClient{
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: urls.baseUrl,
            headers: {
                Cookie: fs.readFileSync(cookieFileName, { encoding: 'utf8' })
            },
            timeout: 45000,
            transformResponse: [(data) => JSON.parse(data)]
        });
    }
}
