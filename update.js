const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await updateListingByName(client, "Pedro", {
            "Type 1": "Water",
            "Type 2": "Ghost"
        });
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
async function updateListingByName(client, listingName, listingUpdated) {
    const result = await client.db("FATEC").collection("Pokemon").updateOne({Name: listingName}, {$set: listingUpdated});
    console.log('Documento(s) atualizado(s)!');
};