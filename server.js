const http = require("http");

const mongodb = require("mongodb");
let db;
const connecttionString =
  "mongodb+srv://ulugbek8888:cbum4444@cluster0.wji5rr2.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
  connecttionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");

      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `server is running on PORT, ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
