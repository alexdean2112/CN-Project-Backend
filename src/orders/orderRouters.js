const { Router } = require("express");
const {
  createOrder,
  readOrders,
  updateOrder,
  deleteOrder,
} = require("./orderController");
const { tokenCheck } = require("../middleware");

const orderRouter = Router();

orderRouter.post("/createOrder", tokenCheck, createOrder);
orderRouter.get("/readOrders", tokenCheck, readOrders);
orderRouter.put("/updateOrder", tokenCheck, updateOrder);
orderRouter.delete("/deleteOrder", tokenCheck, deleteOrder);

module.exports = orderRouter;
