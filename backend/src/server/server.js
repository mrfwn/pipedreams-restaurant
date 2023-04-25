const fastify = require('fastify');
const cors = require("@fastify/cors");
const errorHandler = require('../error/errorHandler');
let app = null;

const start = async (api, repository) => {
   
    app = fastify();

    app.register(cors, {
        origin: "*",
        methods: ["GET"]
      });
    
    app.register((instance, _, next) => {
        api(instance, repository);
        next();
    }, { prefix: '/api/v1' });

    app.setErrorHandler(errorHandler);
    
    return app.listen({ port: process.env.PORT });
}

const stop = async () => {
    if (app) await app.close();
    return true;
}

module.exports = { start, stop }