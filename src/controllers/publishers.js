import {
	createPublisher,
	deletePublisher,
	getAllPublishers,
	getPublisherById,
	updatePublisher,
} from "../servies/publishers.js";

export const publisherController = {
	async create(req, res, next) {
		try {
			const body = req.body;
			const result = await createPublisher(body);
			res.status(201).send(result);
		} catch (error) {
			next(error);
		}
	},

	async findAll(req, res, next) {
		try {
			const result = await getAllPublishers();
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async findOne(req, res, next) {
		try {
			const { id } = req.params;
			const result = await getPublisherById(id);
			if (!result) return res.status(404).json({ message: "Publisher not found" });
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async update(req, res, next) {
		try {
			const { id } = req.params;
			const body = req.body;
			const result = await updatePublisher(id, body);
			if (!result) return res.status(404).json({ message: "Publisher not found" });
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async delete(req, res, next) {
		try {
			const { id } = req.params;
			const result = await deletePublisher(id);
			if (!result) return res.status(404).json({ message: "Publisher not found" });
			res.json({ message: "Publisher deleted successfully" });
		} catch (error) {
			next(error);
		}
	},
};
