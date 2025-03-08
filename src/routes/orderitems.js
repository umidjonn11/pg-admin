import {Router} from "express";
import { orderItemController } from "../controllers/index.js";
import { validateData } from "../middlewares/validation.middleware.js";
import { createOrderitemsSchema,updateOrderitemsSchema } from "../validations/orderitems.validation.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const orderitemsRouter = Router();

orderitemsRouter.post("/",authMiddleware,validateData(createOrderitemsSchema) ,orderItemController.create);
orderitemsRouter.get("/", orderItemController.findAll);
orderitemsRouter.get("/:id", orderItemController.findOne);
orderitemsRouter.put("/:id",authMiddleware,validateData(updateOrderitemsSchema) ,orderItemController.update);
orderitemsRouter.delete("/:id",authMiddleware, orderItemController.delete);


