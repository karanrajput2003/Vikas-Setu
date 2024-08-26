const express = require("express");
const mongoose = require('mongoose');

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
  });


  //const MONGODB_URI = 'mongodb+srv://urbaninnovatorssih:DXQTNAHtyp2KXRvh@cluster0.uivxlnm.mongodb.net/VS'


  const MONGODB_URI = 'mongodb+srv://urbaninnovatorssih:DXQTNAHtyp2KXRvh@cluster0.qtzj7.mongodb.net/VS'

  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

  
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});