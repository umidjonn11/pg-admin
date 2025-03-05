import {Router} from "express";
import { bookAuthorController } from "../controllers/index.js";

export const bookAuthorsRouter = Router();

bookAuthorsRouter.post("/", bookAuthorController.create);
bookAuthorsRouter.get("/", bookAuthorController.findAll);
bookAuthorsRouter.get("/:id", bookAuthorController.findOne);
bookAuthorsRouter.put("/:id", bookAuthorController.update);
bookAuthorsRouter.delete("/:id", bookAuthorController.delete);

