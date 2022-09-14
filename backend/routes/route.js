import express from "express";
import {
  deleteUser,
  editUser,
  getUsers,
  getAddUsers,
  getUsersId,
} from "../controller/user-controller.js";

const route = express.Router();

route.get("/", getUsers);
route.post("/add", getAddUsers);
route.get("/:id", getUsersId);
route.put("/:id", editUser);
route.delete("/:id", deleteUser);
export default route;
