const mongoose = require("mongoose");
express = require("express");
app = express();
path = require("path");

var contactSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  subject: { type: String, required: true },
  msg: { type: String, required: true },
});

const contactModel = new mongoose.model("contactModel", contactSchema, "contact");

module.exports = contactModel;
