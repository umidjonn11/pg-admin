import { Router } from "express";
import { bookController } from "../controllers/index.js";
import { validateData } from "../middlewares/validation.middleware.js";
import { createBookSchema,updateBookSchema } from "../validations/book.validation.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";



export const bookRouter = Router();

//create
bookRouter.post("/",authMiddleware,validateData(createBookSchema), bookController.create);

//get all
bookRouter.get("/", bookController.findAll);

//get one
bookRouter.get("/:id", bookController.findOne);

//update one
bookRouter.put("/:id",authMiddleware,validateData(updateBookSchema) ,bookController.update);

//delete one
bookRouter.delete("/:id",authMiddleware ,bookController.delete);