const fastify = require('fastify');
const errorHandler = require('../error/errorHandler');

const start = async (api, repository) => {
   
    const app = fastify();
    
    app.register((instance, _, next) => {
        api(instance, repository);
        next();
    }, { prefix: '/api/v1' });

    app.setErrorHandler(errorHandler);
    
    app.listen({ port: process.env.PORT }).then(() => {
        console.log(`Server Running: Port-${process.env.PORT}`);
    });
}

const stop = async () => {
    if (server) await server.close();
    return true;
}

module.exports = { start, stop }