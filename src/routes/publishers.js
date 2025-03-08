import { Router } from "express";
import { publisherController } from "../controllers/index.js";
import { validateData } from "../middlewares/validation.middleware.js";
import { createPublisherSchema,updatePublisherSchema } from "../validations/publishers.validation.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const publisherRouter = Router();

publisherRouter.post("/",authMiddleware,validateData(createPublisherSchema) ,publisherController.create);
publisherRouter.get("/", publisherController.findAll);
publisherRouter.get("/:id", publisherController.findOne);
publisherRouter.put("/:id",authMiddleware,validateData(updatePublisherSchema) ,publisherController.update);
publisherRouter.delete("/:id",authMiddleware ,publisherController.delete);

