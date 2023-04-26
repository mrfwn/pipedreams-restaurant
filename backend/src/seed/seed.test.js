require('dotenv/config');
const seed = require('./seed');

describe("#Seed Populate Unit Test", () => {

    test('Seed loadSeed', async () => {
        await expect(
            seed.loadSeed()
          ).resolves.not.toThrowError();
        
    });
})
