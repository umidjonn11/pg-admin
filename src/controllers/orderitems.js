import {
	createOrderItem,
	deleteOrderItem,
	getAllOrderItems,
	getOrderItemById,
	updateOrderItem,
} from "../servies/index.js";

export const orderItemController = {
	async create(req, res, next) {
		try {
			const body = req.body;
			const result = await createOrderItem(body);
			res.status(201).send(result);
		} catch (error) {
			next(error);
		}
	},

	async findAll(req, res, next) {
		try {
			const result = await getAllOrderItems();
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async findOne(req, res, next) {
		try {
			const { id } = req.params;
			const result = await getOrderItemById(id);
			if (!result) return res.status(404).json({ message: "Order Item not found" });
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async update(req, res, next) {
		try {
			const { id } = req.params;
			const body = req.body;
			const result = await updateOrderItem(id, body);
			if (!result) return res.status(404).json({ message: "Order Item not found" });
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async delete(req, res, next) {
		try {
			const { id } = req.params;
			const result = await deleteOrderItem(id);
			if (!result) return res.status(404).json({ message: "Order Item not found" });
			res.json({ message: "Order Item deleted successfully" });
		} catch (error) {
			next(error);
		}
	},
};
