const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://test:test123@cluster0.er92y.mongodb.net/project?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
  if(!error) {
    console.log('success');
  } else {
    console.log('error connecting in database');
  }
});

const Form = require('./form.model');