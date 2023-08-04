const { MongoClient, ServerApiVersion } = require("mongodb");

const connection_uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PWD}@urlshortner.wzhstax.mongodb.net/?retryWrites=true&w=majority`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(connection_uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

// Trying to connect to Mongo
client.connect((err) => {
    if (err) {
        console.log('An error occurred:', err);
        process.exit(1);
    } else {
        client.db("admin").command({ ping: 1 });
        console.log('Connected to database!');
    }
});

exports.db = client.db('url_shortner');