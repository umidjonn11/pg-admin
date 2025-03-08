import {Router} from "express";
import { orderController } from "../controllers/index.js";
import { validateData } from "../middlewares/validation.middleware.js";
import { createOrderSchema,updateOrderSchema } from "../validations/order.validation.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";


export const orderRouter = Router();

orderRouter.post("/",authMiddleware,validateData(createOrderSchema) ,orderController.create);
orderRouter.get("/", orderController.findAll);
orderRouter.get("/:id", orderController.findOne);
orderRouter.put("/:id",authMiddleware,validateData(updateOrderSchema) ,orderController.update);
orderRouter.delete("/:id",authMiddleware, orderController.delete);

