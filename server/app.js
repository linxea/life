const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.set("port", PORT);
app.use(routes);
app.use(express.static("client/public"));

app.listen(app.get("port"), () => {
  console.log("Running at localhost %s", PORT);
});
