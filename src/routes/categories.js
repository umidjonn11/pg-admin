import { Router } from "express";
import { categoryController } from "../controllers/index.js";
import { validateData } from "../middlewares/validation.middleware.js";
import { createCategorySchema,updateCategorySchema } from "../validations/category.validation.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const categoryRouter = Router();

//create
categoryRouter.post("/",authMiddleware,validateData(createCategorySchema) ,categoryController.create);

//get all
categoryRouter.get("/", categoryController.findAll);

//get one
categoryRouter.get("/:id", categoryController.findOne);

//update one
categoryRouter.put("/:id",authMiddleware,validateData(updateCategorySchema) ,categoryController.update);

//delete one
categoryRouter.delete("/:id",authMiddleware, categoryController.delete);