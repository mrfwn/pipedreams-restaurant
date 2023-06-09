require('dotenv/config');
const database = require('./database');

describe("#Database Unit Test", () => {
    afterEach(async() => {
        await database.disconnect();
    });
    test('Database Connection', async () => {
        const connection = await database.connect();
        expect(connection).toBeTruthy();
    });
    
    test('Database Disconnection without Client', async () => {
        const isDisconnected = await database.disconnect();
        expect(isDisconnected).toBeTruthy();
    });

    test('Database Disconnection with Client', async () => {
        await database.connect();
        const isDisconnected = await database.disconnect();
        expect(isDisconnected).toBeTruthy();
    });
})
