const { Router } = require("express");
const {
  createOrder,
  readOrders,
  updateOrder,
  deleteOrder,
} = require("./orderController");

const orderRouter = Router();

orderRouter.post("/createOrder", createOrder);
orderRouter.get("/readOrders", readOrders);
orderRouter.put("/updateOrder", updateOrder);
orderRouter.delete("/deleteOrder", deleteOrder);

module.exports = orderRouter;
