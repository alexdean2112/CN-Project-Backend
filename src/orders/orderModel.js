const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: Number,
    required: true,
  },
});

const Orders = mongoose.model("orders", orderSchema);

module.exports = Orders;
