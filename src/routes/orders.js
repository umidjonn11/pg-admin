import {Router} from "express";
import { orderController } from "../controllers/index.js";

export const orderRouter = Router();

orderRouter.post("/", orderController.create);
orderRouter.get("/", orderController.findAll);
orderRouter.get("/:id", orderController.findOne);
orderRouter.put("/:id", orderController.update);
orderRouter.delete("/:id", orderController.delete);

