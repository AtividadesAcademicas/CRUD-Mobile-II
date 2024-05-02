const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await findOneListingByName(client, "Pikachu");
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("FATEC").collection("Pokemon").findOne({Name: nameOfListing});
    if(result) {
        console.log(`Lista de nome '${nameOfListing}'`);
        console.log(result);
    } else console.log(`Não está na lista '${nameOfListing}'`);
};