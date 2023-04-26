const database = require("../config/database");
const cooksJsonFile = require("./cooks.json");
const waitersJsonFile = require("./waiters.json");

const loadSeed = async () => {
    const db = await database.connect();
    await db.collection("cooks").insertOne(cooksJsonFile);
    await db.collection("waiters").insertOne(waitersJsonFile);
}

module.exports = { loadSeed };