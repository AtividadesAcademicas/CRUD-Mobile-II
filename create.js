const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await createListing(client, {
            "#": 1,
            "Name": "Pedro",
            "Type 1": "Grass",
            "Type 2": "Poison",
            "Total": 717,
            "HP": 50,
            "Attack": 50,
            "Defense": 71,
            "Sp": {
                "Atk": 65,
                "Def": 65
            },
            "Speed": 500,
            "Generation": 7,
            "Legendary": true
        });
    } catch(e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
async function createListing(client, newListing) {
    const result = await client.db("FATEC").collection("Pokemon").insertOne(newListing);
    console.log('Documento criado com sucesso!');
};