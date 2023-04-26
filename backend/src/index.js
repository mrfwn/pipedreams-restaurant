(async () => {
    require('dotenv/config');
    const server = require("./server/server");
    const seed = require("./seed/seed");
    try {
        await seed.loadSeed();
        await server.start();
        console.log(`Server is up and running at ${process.env.PORT || 8080}`);
    } catch (error) {
        console.error(error);
    }
})();