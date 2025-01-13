const express = require("express");
const mongoose = require("mongoose");
const routeProduct = require("./product.route");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", routeProduct);

// DB connection
mongoose
  .connect(
    "mongodb+srv://israelclucena:SfJXaWIEnbBKGhsi@backenddb.eellm.mongodb.net/Project-0?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database Connected!");
  })
  .catch(() => {
    console.log("Database Connection Falied!");
  });

// Server Init
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
