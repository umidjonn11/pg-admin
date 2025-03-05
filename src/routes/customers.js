import {Router} from "express";
import { customersController } from "../controllers/index.js";

export const customerRoutes = Router();

customerRoutes.post("/", customersController.create); 
customerRoutes.get("/", customersController.findAll); 
customerRoutes.get("/:id", customersController.findOne); 
customerRoutes.put("/:id", customersController.update); 
customerRoutes.delete("/:id", customersController.delete); 

