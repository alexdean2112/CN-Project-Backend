const { Router } = require("express");
const { createUser, readUsers, deleteUser, updateUser, loginUser } = require("./userControllers");
const { hashPass, tokenCheck, comparePassword, hashPass2 } = require("../middleware/index")

const userRouter = Router();

userRouter.post("/createUser", hashPass, createUser);
userRouter.post("/loginUser", comparePassword, loginUser )
userRouter.get("/loginUser", tokenCheck, loginUser )
userRouter.get("/readUsers", tokenCheck, readUsers );
userRouter.put("/updateUser", tokenCheck, hashPass2, updateUser );
userRouter.delete("/deleteUser", tokenCheck, deleteUser );

module.exports = userRouter;