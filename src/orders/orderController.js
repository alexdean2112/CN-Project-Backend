const Orders = require("./orderModel");

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
    await Orders.updateOne(req.body.filter, {$set: req.body.update});
    res.status(200).send({message: "Order details updated" });
}
catch (error) {
    console.log(error);
    res.status(500).send({message: "Failed to change details"});
}
};

exports.deleteOrder = async (req, res) => {
  try {
    await Orders.deleteMany({ orderid: req.body.orderid });
    res.status(200).send({ message: "Order(s) cancelled." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
