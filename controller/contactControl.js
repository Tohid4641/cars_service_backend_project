const contactModel = require('../model/contactModel')

const contactControl = (req, res) => {
  c = new contactModel(req.body);
  c.save();
  res.render("../views/contactAck.ejs", { req });
  console.log("Database Updated for contact...");
};

module.exports = contactControl;