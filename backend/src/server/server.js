const fastify = require('fastify');
const cors = require("@fastify/cors");
const errorHandler = require('../error/errorHandler');
const staff = require('../api/staff');
    
let app = null;

/**
 * function responsible for starting the http server and signing routes
 * @returns success status if successfully started
 */
const start = async () => {
   
    app = fastify();

    app.register(cors, { origin: "*", methods: ["GET"] });
    
    app.register(staff, { prefix: '/api/v1' });

    app.setErrorHandler(errorHandler);
    
    return app.listen( process.env.PORT || 8080 , '0.0.0.0');
}

const stop = async () => {
    if (app) await app.close();
    return true;
}

module.exports = { start, stop }