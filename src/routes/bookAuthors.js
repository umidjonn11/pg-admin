import {Router} from "express";
import { bookAuthorController } from "../controllers/index.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const bookAuthorsRouter = Router();

bookAuthorsRouter.post("/",authMiddleware, bookAuthorController.create);
bookAuthorsRouter.get("/", bookAuthorController.findAll);
bookAuthorsRouter.get("/:id", bookAuthorController.findOne);
bookAuthorsRouter.put("/:id",authMiddleware, bookAuthorController.update);
bookAuthorsRouter.delete("/:id",authMiddleware, bookAuthorController.delete);

