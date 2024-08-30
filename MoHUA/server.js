const express = require("express");
const db = require("mongoose");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const app = express();

app.use(express.json());
app.use(cors());

db.set("strictQuery", false);

// MongoDB connection
db.connect("mongodb+srv://crce9544now:crce9544@clusternow.lnfgy.mongodb.net", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

const conn = db.connection;

app.listen(4000, () => {
  console.log("Server running at 4000");
});

// Insert data
app.post("/insert", (req, res) => {
  const fdata = req.body.fdata;
  conn.collection("ticket").insertOne(fdata, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error inserting data");
    } else {
      console.log("Inserted");
      res.status(202).send("Success");
    }
  });
});

// Get data
app.get("/", async (req, res) => {
  try {
    const response = await conn.collection("ticket").find({}).toArray();
    res.json(response);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

// Delete data
app.post("/delete", async (req, res) => {
  const id = req.body.id;
  console.log("Received ID for deletion:", id); // Log the received ID
  try {
    const result = await conn
      .collection("ticket")
      .deleteOne({ _id: new ObjectId(id) }); // Use 'new' here
    if (result.deletedCount === 0) {
      res.status(404).send("No ticket found");
    } else {
      console.log("Deleted");
      res.status(200).send("Success");
    }
  } catch (error) {
    console.error("Error deleting ticket:", error);
    res.status(500).send("Error deleting ticket");
  }
});

// Get data for update
app.post("/get", async (req, res) => {
  const id = req.body.id;
  console.log("Received ID for fetching:", id); // Log the received ID
  try {
    const result = await conn
      .collection("ticket")
      .find({ _id: ObjectId(id) })
      .toArray();
    if (result.length === 0) {
      res.status(404).send("No data found");
    } else {
      res.json(result);
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(400).send("Error fetching data");
  }
});

app.post("/update", async (req, res) => {
  const { _id, userid, issue, dept } = req.body;
  console.log("Received update data:", { _id, userid, issue, dept }); // Log received data
  try {
    const result = await conn
      .collection("ticket")
      .updateOne({ _id: new ObjectId(_id) }, { $set: { userid, issue, dept } });
    if (result.modifiedCount === 0) {
      res.status(404).send("No document updated");
    } else {
      res.status(204).send("Success");
    }
  } catch (err) {
    console.log("Record not updated", err);
    res.status(500).send("Error updating ticket");
  }
});
