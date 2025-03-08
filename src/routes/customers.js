import {Router} from "express";
import { customersController } from "../controllers/index.js";
import { validateData } from "../middlewares/validation.middleware.js";
import { createCustomerSchema,updateCustomerSchema } from "../validations/customer.validtion.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const customerRoutes = Router();

customerRoutes.post("/",authMiddleware,validateData(createCustomerSchema) ,customersController.create); 
customerRoutes.get("/", customersController.findAll); 
customerRoutes.get("/:id", customersController.findOne); 
customerRoutes.put("/:id",authMiddleware,validateData(updateCustomerSchema) ,customersController.update); 
customerRoutes.delete("/:id",authMiddleware, customersController.delete); 

