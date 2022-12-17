import { MongoClient } from "mongodb";

export default async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://candie:MM0tqGI5WJw4VQLY@cluster0.auhnmkn.mongodb.net/artsy?retryWrites=true&w=majority"
  );

  return client;
}
