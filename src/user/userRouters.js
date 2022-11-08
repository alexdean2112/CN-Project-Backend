const { Router } = require("express");
const { createUser, readUsers, deleteUser, updateUser, loginUser } = require("./userControllers");
const { hashPass, tokenCheck, comparePassword } = require("../middleware/index")

const userRouter = Router();

userRouter.post("/createUser", hashPass, createUser);
userRouter.post("/loginUser", comparePassword, loginUser )
userRouter.get("/loginUser", tokenCheck, loginUser )
userRouter.get("/readUsers", tokenCheck, readUsers );
userRouter.put("/updateUser", tokenCheck, updateUser );
userRouter.delete("/deleteUser", tokenCheck, deleteUser );

module.exports = userRouter;