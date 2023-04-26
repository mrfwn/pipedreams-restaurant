require('dotenv/config');
const supertest = require('supertest');
const server = require("../server/server");
const cooksJsonFile = require("../seed/cooks.json");
const waitersJsonFile = require("../seed/waiters.json");

describe("#Staff Integration Test", () => {
    let app = null;

    beforeAll(async () => {
        app = await server.start();
    });

    afterAll(async () => {
        await server.stop();
    });

    test('GET /GetCooks', async () => {
        const response = await supertest(app)
            .get('/api/v1/GetCooks');

        expect(response.status).toEqual(200);
        expect(response.body).toEqual(cooksJsonFile);
    });

    test('GET /GetWaiters', async () => {
        const response = await supertest(app)
            .get('/api/v1/GetWaiters');

        expect(response.status).toEqual(200);
        expect(response.body).toEqual(waitersJsonFile);
    });
});