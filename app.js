console.log("server is running");
const express = require("express");
const app = express();
// const http = require("http");
const fs = require("fs");

//Mongo db call

const db = require("./server").db();
let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  }
  {
    user = JSON.parse(data);
  }
});
//1: Entry Codes

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session Codes
//3: Views Codes
app.set("views", "views");
app.set("view engine", "ejs");

//4:Routing codes
app.post("/create-item", (req, res) => {
  // console.log("user entered /create-item");
  // console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
  //TODO: code with db here
});
// app.get("/author", (req, res) => {
//   res.render("author", { user: user });
// });
app.get("/", function (req, res) {
  // console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
