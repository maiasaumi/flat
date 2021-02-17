/* eslint-disable no-console */
const express = require("express");
const http = require("http");
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
