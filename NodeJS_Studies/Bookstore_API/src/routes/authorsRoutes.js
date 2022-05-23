import express from "express";
import authorsController from "../controllers/authorsController.js";

const router = express.Router();

router
    .get("/authors", authorsController.listAuthors)
    .get("/authors/:id", authorsController.listAuthorById)
    .post("/authors", authorsController.registerAuthor)
    .put("/authors/:id", authorsController.updateAuthor)
    .delete("/authors/:id", authorsController.deleteAuthor)

export default router;