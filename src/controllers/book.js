import {
    createBook,
    deleteBook,
    getAllBooks,
    getBookById,
    updateBook,
  } from "../servies/index.js";
  
  export const bookController = {
    async create(req, res, next) {
      try {
        const body = req.body;
        const result = await createBook(body);
        res.status(201).send(result);
      } catch (error) {
        next(error);
      }
    },
    async findAll(req, res, next) {
      try {
        const result = await getAllBooks();
        res.json(result);
      } catch (error) {
        next(error);
      }
    },
    async findOne(req, res, next) {
      try {
        const { id } = req.params;
        const result = await getBookById(id);
        res.json(result);
      } catch (error) {
        next(error);
      }
    },
    async update(req, res, next) {
      try {
        const { id } = req.params;
        const updatedFields = req.body;
        const result = await updateBook(id, updatedFields);
        res.json(result);
      } catch (error) {
        next(error);
      }
    },
    async delete(req, res, next) {
      try {
        const { id } = req.params;
        const result = await deleteBook(id);
        res.json(result);
      } catch (error) {
        next(error);
      }
    },
  };
  