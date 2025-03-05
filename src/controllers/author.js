import {
	createAuthor,
	getAllAuthors,
	getAuthorById,
	updateAuthor,
	deleteAuthor,
} from "../servies/index.js";

export const authorController = {
	async create(req, res, next) {
		try {
			const body = req.body;
			const result = await createAuthor(body);
			res.status(201).json(result);
		} catch (error) {
			next(error);
		}
	},

	async findAll(req, res, next) {
		try {
			const result = await getAllAuthors();
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async findOne(req, res, next) {
		try {
			const { id } = req.params;
			const result = await getAuthorById(id);
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async update(req, res, next) {
		try {
			const { id } = req.params;
			const updatedFields = req.body;
			const result = await updateAuthor(id, updatedFields);
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async delete(req, res, next) {
		try {
			const { id } = req.params;
			const result = await deleteAuthor(id);
			res.json(result);
		} catch (error) {
			next(error);
		}
	},
};
