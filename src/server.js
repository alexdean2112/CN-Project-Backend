require("./db/connection");
const express = require("express");
const userRouter = require("./user/userRouters");
const cors = require("cors");
const orderRouter = require("./orders/orderRouters");

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());

app.use(cors())

app.use(userRouter, orderRouter);

app.listen(port, () => {
    console.log(`Listening to Port ${port}`);
})

