const database = require("../config/database");

/**
 * 
 * @returns an @Object containing the days of the week as a key and an @Array with the names of the cooks
 */
const getCooks = async () => {
    const db = await database.connect();
    const cooksResult = await db.collection("cooks").findOne();
    delete cooksResult._id;
    return cooksResult;
}

/**
 * 
 * @returns an @Object containing the days of the week as a key and an @Array with the names of the waiters
 */
const getWaiters = async () => {
    const db = await database.connect();
    const waitersResult = await db.collection("waiters").findOne();
    delete waitersResult._id;
    return waitersResult;
}

const disconnect = async () => database.disconnect();

module.exports = { getCooks, getWaiters, disconnect };