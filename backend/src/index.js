(async () => {
    require('dotenv/config');
    const staff = require('./api/staff');
    const server = require("./server/server");
    const repository = require("./repository/repository");

    try {
        await repository.loadBaseSchema();
        await server.start(staff, repository);
        console.log(`Server is up and running at ${process.env.PORT}`);
    } catch (error) {
        console.error(error);
    }
})();