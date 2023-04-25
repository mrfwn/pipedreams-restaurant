const fastify = require('fastify');

module.exports = (error, _, reply) => {
    if (error instanceof fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
      console.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    } else {
      return reply.send(error);
    }
}