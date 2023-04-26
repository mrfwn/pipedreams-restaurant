require('dotenv/config');
const staffModule = require('./staffModule');

describe("#Staff Module Unit Test", () => {
    test('Staff Module getCooks', async () => {
        const cooks = await staffModule.getCooks();
        expect(cooks).toBeTruthy();
    });
    
    test('Staff Module getWaiters', async () => {
        const waiters = await staffModule.getWaiters();
        expect(waiters).toBeTruthy();
    });
    
    test('Staff Module Disconnect', async () => {
        const isDisconnected = await staffModule.disconnect();
        expect(isDisconnected).toBeTruthy();
    });
})
