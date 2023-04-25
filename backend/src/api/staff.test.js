require('dotenv/config');
const supertest = require('supertest');
const staff = require('./staff');
const server = require("../server/server");
const repository = require("../repository/repository");
const cooksJsonFile = require("../config/cooks.json");
const waitersJsonFile = require("../config/waiters.json");

describe("#Staff Integration Test", () => {
    let app = null;

    beforeAll(async () => {
        app = await server.start(staff, repository);
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