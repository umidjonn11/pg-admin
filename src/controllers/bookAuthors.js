import {
	createBookAuthor,
	deleteBookAuthor,
	getAllBookAuthors,
	getBookAuthorById,
	updateBookAuthor,
} from "../servies/bookAuthors.js";

export const bookAuthorController = {
	async create(req, res, next) {
		try {
			const body = req.body;
			const result = await createBookAuthor(body);
			res.status(201).send(result);
		} catch (error) {
			next(error);
		}
	},

	async findAll(req, res, next) {
		try {
			const result = await getAllBookAuthors();
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async findOne(req, res, next) {
		try {
			const { id } = req.params;
			const result = await getBookAuthorById(id);
			if (!result) return res.status(404).json({ message: "Book-Author relationship not found" });
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async update(req, res, next) {
		try {
			const { id } = req.params;
			const body = req.body;
			const result = await updateBookAuthor(id, body);
			if (!result) return res.status(404).json({ message: "Book-Author relationship not found" });
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async delete(req, res, next) {
		try {
			const { id } = req.params;
			const result = await deleteBookAuthor(id);
			if (!result) return res.status(404).json({ message: "Book-Author relationship not found" });
			res.json({ message: "Book-Author relationship deleted successfully" });
		} catch (error) {
			next(error);
		}
	},
};
