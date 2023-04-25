module.exports = (error, _, reply) => {
    if (error instanceof fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
      console.error(error);
      reply.status(500).send({ ok: false });
    } else {
      reply.send(error);
    }
}