const mongoose = require("mongoose");
const express = require("express");
const BlessingController = require("./src/controllers/blessingController");
const BlessingService = require("./src/services/blessingService");

const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/crud-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create instances of the repositories, services, and controllers

const blessingService = new BlessingService();
const blessingController = new BlessingController(blessingService);

// Define routes
app.get("/blessing", (req, res) => blessingController.getBlessing(req, res));

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
