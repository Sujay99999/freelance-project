const connection = require('./model');
const express = require('express');
const application = express();
const path = require('path');
const expressHandlebars  = require('express-handlebars');
const bodyparser = require('body-parser');

const FormController = require('./controllers/form');

application.use(bodyparser.urlencoded({
  extended: true
}));

application.set('views', path.join(__dirname, "/views/"));

application.engine("hbs", expressHandlebars({
  extname: "hbs",
  deefaultLayout: "mainlayout",
  layoutsDir: __dirname + "/views/layouts"
}));

application.set("view engine", "hbs");

application.get("/", (req, res, next) => {
  res.render("index",{})
  next();
});

application.use('/', FormController);

application.listen("3000", () => {
  console.log('server started!');
})