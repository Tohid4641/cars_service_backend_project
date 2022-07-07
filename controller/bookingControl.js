const bookingModel = require('../model/bookedModel')

const bookingControl = (req, res) => {
  b = new bookingModel(req.body);
  b.save();
  res.render("../views/bookingAck.ejs", { req });
  console.log("Database Update for booking...");
};

module.exports = bookingControl;
