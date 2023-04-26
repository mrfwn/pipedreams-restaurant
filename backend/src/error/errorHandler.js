const fastify = require('fastify');
/**
 * the error handler must perform the treatment and establish formatting for the return
 * @param {*} error gets an instance of fastify error
 * @param {*} _ empty
 * @param {*} reply fastify answer function
 * @returns should return a message with the status or error that was not identified
 */
module.exports = (error, _, reply) => {
    if (error instanceof fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
      console.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    } else {
      return reply.send(error);
    }
}