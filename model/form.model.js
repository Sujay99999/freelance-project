const mongoose = require('mongoose');

const Formschema = new mongoose.Schema({
  formID: {
    type: String,
  },
  formFName: {
    type: String,
    require: true
  },
  formMName: {
    type: String,
  },
  formLName: {
    type: String,
    require: true
  },
  formGender: {
    type: String,
    require: true
  },
  formDOB: {
    type: String,
    require: true
  },
  formPAN: {
    type: String,
    require: true
  },
  formFaName: {
    type: String,
    require: true
  },
  formMSTATUS: {
    type: String,
    require: true
  }
});


mongoose.model("Form", Formschema);