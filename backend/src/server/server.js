const fastify = require('fastify');
const errorHandler = require('../error/errorHandler');

async function start(api) {
   
    const app = fastify();
    
    app.register((instance, _, next) => {
        api(instance);
        next();
    }, { prefix: '/api/v1' });

    app.setErrorHandler(errorHandler);
    

    app.listen({ port: process.env.PORT }).then(() => {
        console.log(`Server Running: Port-${process.env.PORT}`);
    });
}

module.exports = { start }