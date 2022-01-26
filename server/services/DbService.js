const MongoClient = require('mongodb').MongoClient;

class DbService {

    constructor() {
        this.conn = undefined;
        this.db = undefined;
    }

    connect = async (env) => {
        const {MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_PORT, MONGO_DB, MONGO_AUTHDB, other} = env;
        const url = 'mongodb://'
            + MONGO_USER + ':'
            + MONGO_PASS + '@'
            + MONGO_HOST + ':'
            + MONGO_PORT 
            + '?authSource='
            + MONGO_AUTHDB;

        try {

            this.conn = await MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

            this.db = this.conn.db(MONGO_DB);
            console.log('Connected to MongoDb');
            return this.db
        
        } catch (e) {
            console.log(e);
            return null;
        }

    };

    getDb = () => {
        return this.db;
    };

}

module.exports = new DbService();