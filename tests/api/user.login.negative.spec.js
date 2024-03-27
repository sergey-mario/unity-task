const { test, expect } = require('../../fixture/app.fixture');
const { credentials, tags } = require('../../utils/constant');
const { LoginApi } = require('../../api/LoginApi');

const validEmail = credentials.email;
const validPassword = credentials.password;

let loginApi;

test.beforeAll(async () => {
    loginApi = new LoginApi();
});

test.describe('User login negative flow', async () => {
    const dataProvider = [
        {
            testTitle: 'credentials as empty string',
            email: '',
            password: ''
        },
        {
            testTitle: 'email as empty string',
            email: '',
            password: validPassword
        },
        {
            testTitle: 'password as empty string',
            email: validEmail,
            password: ''
        }
    ];

    for (const { testTitle, email, password } of dataProvider) {
        test(`User can not login if enter ${testTitle}`, { tag: tags.API }, async () => {
            try {
                await expect(
                    loginApi.login(email, password)
                ).rejects.toThrow();
            } catch (e) {
                expect(e.message).toBeTruthy();
            }
        });
    }
});
