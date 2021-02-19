/* eslint-disable no-console */
const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const productRoutes = require("../routes/products");
const customerRoutes = require("../routes/customers");
const priceRoutes = require("../routes/prices");

require("dotenv").config();

const PORT = process.env.PORT || 9000;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/prices", priceRoutes);

app.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
