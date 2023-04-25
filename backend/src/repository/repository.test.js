require('dotenv/config');
const repository = require('./repository');

describe("#Repository Unit Test", () => {
    test('Repository getCooks', async () => {
        const cooks = await repository.getCooks();
        expect(cooks).toBeTruthy();
    });
    
    test('Repository getWaiters', async () => {
        const waiters = await repository.getWaiters();
        expect(waiters).toBeTruthy();
    });
    
    test('Repository Disconnect', async () => {
        const isDisconnected = await repository.disconnect();
        expect(isDisconnected).toBeTruthy();
    });

    test('Respository loadBaseSchema', async () => {
        await expect(
            repository.loadBaseSchema()
          ).resolves.not.toThrowError();
        
    });
})
