const express = require('express');
const cors = require('cors');

const app = express();

//middleware

app.use(cors());
app.use(express.json());

//test api

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});



// sample API
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend  mahipal pawar👋" });
});

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});