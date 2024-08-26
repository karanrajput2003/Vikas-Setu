const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

const db = require("./models");

db.mongoose
  .connect(
    "mongodb+srv://urbaninnovatorssih:DXQTNAHtyp2KXRvh@cluster0.qtzj7.mongodb.net/VS",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
