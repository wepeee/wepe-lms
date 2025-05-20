const express = require("express");
const app = express();

const userRoute = require("./routes/userRoute");

const userAuthRoute = require("./routes/userAuthRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/auth", userAuthRoute);

app.get("/", (req, res) => res.send("welcome to the backend!"));

module.exports = app;
