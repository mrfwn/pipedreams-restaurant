module.exports = async (app) => {
    app.get('/GetCooks', async (req, res) => {
        return { ok:true };
    });

    app.get('/GetWaiters', async (req, res) => {
        return { ok: true };
    });
};
