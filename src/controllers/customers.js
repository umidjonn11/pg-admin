import { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } from "../servies/index.js";

export const customersController = {
	async create(req, res, next) {
		try {
			const body = req.body;
			const result = await createCustomer(body);
			res.status(201).json(result);
		} catch (error) {
			next(error);
		}
	},

	async findAll(req, res, next) {
		try {
			const result = await getAllCustomers();
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async findOne(req, res, next) {
		try {
			const { id } = req.params;
			const result = await getCustomerById(id);
			if (!result) return res.status(404).json({ message: "Customer not found" });
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async update(req, res, next) {
		try {
			const { id } = req.params;
			const body = req.body;
			const result = await updateCustomer(id, body);
			if (!result) return res.status(404).json({ message: "Customer not found" });
			res.json(result);
		} catch (error) {
			next(error);
		}
	},

	async delete(req, res, next) {
		try {
			const { id } = req.params;
			const result = await deleteCustomer(id);
			if (!result) return res.status(404).json({ message: "Customer not found" });
			res.json({ message: "Customer deleted successfully" });
		} catch (error) {
			next(error);
		}
	},
};
