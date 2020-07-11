const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const FormModel = mongoose.model("Form");

router.get('/',(req, res) => {
  res.render("../views/layouts/main.hbs");
});

router.post("/", (req, res) => {
  console.log(req.body);
  //SETTING
  var form = new FormModel();
  form.formFName = req.body.formFName;
  form.formMName = req.body.formMName;
  form.formLName = req.body.formLName;
  form.formMName = req.body.formMName;
  form.formGender = req.body.formGender;
  form.formDOB = req.body.formDOB;
  form.formPAN = req.body.formPAN;
  form.formFaName = req.body.formFaName;
  form.formMSTATUS = req.body.formMSTATUS;
  form.formID = Math.ceil(Math.random() * 10000000000);
  form.save((err, docs) => {
    if(!err){
      res.redirect('/details');
    } else {
      res.send('error occured');
    }
  })

});

router.get("/details",(req, res) => {

  //GETTING
  CourseModel.find((err, docs) => {
    if(!err){
      console.log(docs);
      res.render("list", {data: docs})
    } else {
      res.send("Error");
    }
  })
  res.send("Course Controller");
});

module.exports = router; 