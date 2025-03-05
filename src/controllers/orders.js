import {
	createOrder,
	getAllOrders,
	getOrderById,
	updateOrder,
	deleteOrder,
} from "../servies/index.js";

export const orderController = {
	async create(req, res, next) {
		try {
			const body = req.body;
			const result = await createOrder(body);
			res.status(201).json(result);
		} catch (error) {
			next(error);
		}
	},

	async findAll(req, res, next) {
		try {
			const result = await getAllOrders();
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async findOne(req, res, next) {
		try {
			const { id } = req.params;
			const result = await getOrderById(id);
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async update(req, res, next) {
		try {
			const { id } = req.params;
			const updatedFields = req.body;
			const result = await updateOrder(id, updatedFields);
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async delete(req, res, next) {
		try {
			const { id } = req.params;
			const result = await deleteOrder(id);
			res.json(result);
		} catch (error) {
			next(error);
		}
	},
};
