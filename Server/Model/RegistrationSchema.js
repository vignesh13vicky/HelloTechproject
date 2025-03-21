const mongoose = require("mongoose");

const registration = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  date: { type: String, required: true },
});

const messageSchema= mongoose.model("Contact Message",registration)

module.exports = messageSchema