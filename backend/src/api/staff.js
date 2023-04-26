const staffModule = require("../modules/staffModule");
/**
 * this file will contain all the endpoints referring to that entity
 * @param {*} app fastify connection instance for creating endpoints
 */
module.exports = async (app) => {
    app.get('/GetCooks', async () => staffModule.getCooks());
    app.get('/GetWaiters', async () => staffModule.getWaiters());
};
