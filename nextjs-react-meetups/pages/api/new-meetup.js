import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup
async function handler(req, res) {
  console.log("handler is called");
  console.log(
    "process.env.MONGODB_CONNECT_URL",
    process.env.MONGODB_CONNECT_URL
  );
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    const client = await MongoClient.connect(process.env.MONGODB_CONNECT_URL);
    console.log(process.env.MONGODB_CONNECT_URL);

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({
      message: "Meetup inserted!",
    });
  }
}

export default handler;
