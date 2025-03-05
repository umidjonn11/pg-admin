import {Router} from "express";
import { customersController } from "../controllers/index.js";

export const customerRoutes = Router();

customerRoutes.post("/", customersController.create); // Create a new customer
customerRoutes.get("/", customersController.findAll); // Get all customers
customerRoutes.get("/:id", customersController.findOne); // Get a single customer
customerRoutes.put("/:id", customersController.update); // Update a customer
customerRoutes.delete("/:id", customersController.delete); // Delete a customer

