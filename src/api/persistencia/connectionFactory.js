const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:123teste123@teste-j0o3k.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        console.log(err)
    } else {
        const collection = client.db("test").collection("devices");
        console.log("Conectado!!!!!!!!!!!");
        client.close();
    }
});