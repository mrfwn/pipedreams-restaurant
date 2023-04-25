(async () => {
    require('dotenv/config');
    const staff = require('./api/staff');
    const server = require("./server/server");

    try {
        await server.start(staff);
        console.log(`Server is up and running at ${process.env.PORT}`);
    } catch (error) {
        console.error(error);
    }
})();