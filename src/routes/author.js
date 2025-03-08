import { Router } from "express";
import { authorController } from "../controllers/index.js";
import { createAuthorSchema,updateAuthorSchema } from "../validations/authors.validation.js";
import { validateData } from "../middlewares/validation.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const authorRouter = Router();

//create
authorRouter.post("/",authMiddleware,validateData(createAuthorSchema) ,authorController.create);

//get all
authorRouter.get("/", authorController.findAll);

//get one
authorRouter.get("/:id", authorController.findOne);

//update one
authorRouter.put("/:id",authMiddleware,validateData(updateAuthorSchema) ,authorController.update);

//delete one
authorRouter.delete("/:id",authMiddleware ,authorController.delete);