const errorHandler = require('./errorHandler');
const fastify = require('fastify');

describe("#Error Handler Unit Test", () => {
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterAll(() => {
        console.error.mockRestore();
    });

    test("Error Handler - Internal Error", () => {
        const { response, code} = errorHandler(new fastify.errorCodes.FST_ERR_BAD_STATUS_CODE(), '', {
            status: (code) => ({
                send: (response) => ({ response, code })
            })
        });
        expect(response).toStrictEqual({ "message": "Internal server error" });
        expect(code).toBe(500);
    });

    test("Error Handler - Unknown Error", () => {
        const { response } = errorHandler(new Error('Unknown Error'), '', {
            send: (response) => ({ response })
        });
        expect(response).toStrictEqual(new Error('Unknown Error'));
    })
});