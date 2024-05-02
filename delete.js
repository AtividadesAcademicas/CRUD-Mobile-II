const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await deleteByName(client, "Pedro");
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
async function deleteByName(client, nameOfListing) {
    const result = await client.db("FATEC").collection("Pokemon").deleteOne({Name: nameOfListing});
    console.log(`${result.deletedCount} documento(s) deletado(s)!`)
};