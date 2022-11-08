const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderid: {
    type: Number,
    required: true,
    unique: true,
  },
  userid: {
    type: Number,
    required: true,
  },
  itemname: {
    type: String,
    required: true,
  },
  itemprice: {
    type: Number,
    required: true,
  },
});

const Orders = mongoose.model("orders", orderSchema);

module.exports = Orders;
