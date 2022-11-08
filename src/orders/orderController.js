const Orders = require("./orderModel");
const jwt = require("jsonwebtoken");

exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Orders.create(req.body);
    res.status(201).send({ order: newOrder.orderid });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.readOrders = async (req, res) => {
  try {
    const orders = await Orders.find({});
    res.status(200).send({ order: orders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

