console.log("server is running");
const express = require("express");

const app = express();
const http = require("http");

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
  console.log(req.body);
  res.json({ test: "success" });
});
app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log("server is running on PORT", PORT);
});
