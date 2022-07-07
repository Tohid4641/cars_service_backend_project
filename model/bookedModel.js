const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");

var bookingSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  service: { type: String, required: true },
  date: { type: Date ,default:Date.now},
  request: { type: String, required: true },
});

const bookingModel = new mongoose.model("bookingModel", bookingSchema, "booking");

module.exports = bookingModel;
