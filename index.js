const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const productRoutes = require("./src/Routes/products");
const authRoutes = require("./src/Routes/auth");

app.use(bodyParser.json());
app.use("/v1/member", productRoutes);
app.use("/v1/auth", authRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,PATCH,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Authorization,Content-Type");
});

app.listen(4000);
