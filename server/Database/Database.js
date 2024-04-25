// Not Using

// import { MongoClient } from "mongodb";

// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// export async function getDatabase() {
//   try {
//     await client.connect();
//     const db = client.db("DB_CourseBuyProj");
//     const collection = db.collection("services");
//     const res = await collection.findOne({}).toArray();
//     console.log(res);
//   } catch (error) {
//     console.error("Error retrieving data from MongoDB:", error);
//   } finally {
//     await client.close();
//   }
// }

// getDatabase();
