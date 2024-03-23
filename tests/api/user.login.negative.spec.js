const {test, expect} = require('../../fixture/app.fixture');
const {urls, credentials, tags} = require("../../utils/constant");
const axios = require("axios");

const {email, password} = credentials;

const dataProvider = [
    {
        testTitle: 'credentials as empty string',
        email: '',
        password: ''
    },
    {
        testTitle: 'email as empty string',
        email: '',
        password
    },
    {
        testTitle: 'password as empty string',
        email,
        password: ''
    },
]

for (const {testTitle, email, password} of dataProvider) {
    // this test will be failed because it returns 200 status code, but we expect 401 (Unauthorized)
    test(`User can not login if enter ${testTitle}`, {tag: tags.API}, async () => {
        const res = await axios.post(`${urls.baseUrl}${urls.loginPageUrl}`,
            {
                email,
                password
            })
        expect(res.status).toBe(401);
    });
}


