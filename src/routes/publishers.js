import { Router } from "express";
import { publisherController } from "../controllers/index.js";

export const publisherRouter = Router();

publisherRouter.post("/", publisherController.create);
publisherRouter.get("/", publisherController.findAll);
publisherRouter.get("/:id", publisherController.findOne);
publisherRouter.put("/:id", publisherController.update);
publisherRouter.delete("/:id", publisherController.delete);

