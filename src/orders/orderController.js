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

exports.updateOrder = async (req, res) => {
  try {
    await Orders.updateOne(
      { orderid: req.body.orderid },
      { [req.body.key]: req.body.value }
    );
    res.status(201).send({ message: "Order successfully updated." });
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await Orders.deleteOne({ orderid: req.body.orderid });
    response.status(200).send({ message: "Order cancelled." });
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: error.message });
  }
};
