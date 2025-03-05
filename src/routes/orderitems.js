import {Router} from "express";
import { orderItemController } from "../controllers/index.js";

export const orderitemsRouter = Router();

orderitemsRouter.post("/", orderItemController.create);
orderitemsRouter.get("/", orderItemController.findAll);
orderitemsRouter.get("/:id", orderItemController.findOne);
orderitemsRouter.put("/:id", orderItemController.update);
orderitemsRouter.delete("/:id", orderItemController.delete);

