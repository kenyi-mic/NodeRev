const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

var hbs = require("hbs");

app.set("view engine", "hbs");

app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));

app.use(express.static(__dirname + "/public"));

app.use((req, res, err, next) => {
  if (err) return next(err);
  res.status(500);
  res.render("500");
});

app.use((req, res) => {
  res.status(404);
  res.render("404");
});

app.listen(port, () =>
  console.log(`The server is listen at the port ${port} to exit press Ctrl & C`)
);
