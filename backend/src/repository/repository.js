const database = require("../config/database");
const cooksJsonFile = require("../config/cooks.json");
const waitersJsonFile = require("../config/waiters.json");

const getCooks = async () => {
    const db = await database.connect();
    const cooksResult = await db.collection("cooks").findOne();
    delete cooksResult._id;
    return cooksResult;
}

const getWaiters = async () => {
    const db = await database.connect();
    const waitersResult = await db.collection("waiters").findOne();
    delete waitersResult._id;
    return waitersResult;
}

const loadBaseSchema = async () => {
    const db = await database.connect();
    await db.collection("cooks").insertOne(cooksJsonFile);
    await db.collection("waiters").insertOne(waitersJsonFile);
}

const disconnect = async () => database.disconnect();

module.exports = { getCooks, getWaiters, loadBaseSchema, disconnect };