const server = require('./server');

describe("#Server Unit Test", () => {
    const apiMock = () =>  "do nothing";
    afterAll(async () => {
        await server.stop();
    });
    test('Server Start', async () => {
        const instance = await server.start(apiMock, null);
        expect(instance).toBeTruthy();
    });

    test('Server Stop', async () => {
        const isStopped = await server.stop();
        expect(isStopped).toBeTruthy();
    });
});
