const MongoClient = require('mongodb').MongoClient;
let client = null;

/**
 * 
 * @returns must return a database connection instance, this being a @promise
 */
const connect = async () => {
    if (!client) 
        client = new MongoClient(process.env.MONGO_CONNECTION);
    await client.connect();
    return client.db(process.env.DATABASE_NAME);
}

/**
 * 
 * @returns returns a @boolean when the connection is successfully completed
 */
const disconnect = async () => {
    if (!client) return true;
    await client.close();
    client = null;
    return true;
}

module.exports = { connect, disconnect }