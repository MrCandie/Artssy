import connectDatabase from "../../lib";

export default async function handler(req, res) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "connecting to the database failed" });
    return;
  }

  if (req.method === "POST") {
    const { name, postalCode, email, number, checked, city, country } =
      req.body;

    if (
      !name ||
      !postalCode ||
      !email ||
      !number ||
      !checked ||
      !city ||
      !country
    ) {
      res.status(422).json({
        message: "invalid data...Make sure all fields are correctly filled",
      });
      return;
    }
    const userData = {
      name,
      postalCode,
      email,
      number,
      checked,
      city,
      country,
    };

    const db = await client.db();

    try {
      const result = await db.collection("user").insertOne(userData);
      console.log(result);
      res.status(201).json({ message: "Submitting order successful" });
    } catch (error) {
      res.status(500).json({ message: "Submitting order failed!!!" });
    }
  }

  res.status(201).json({ message: "successful" });
}
