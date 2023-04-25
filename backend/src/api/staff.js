module.exports = async (app, repository) => {
    app.get('/GetCooks', async () => repository.getCooks());
    app.get('/GetWaiters', async () => repository.getWaiters());
};
