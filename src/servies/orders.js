import pool from "../config/db.js";

// Create Order
export async function createOrder(order) {
	const query = `
    INSERT INTO Orders (customer_id, order_date, status)
    VALUES ($1, $2, $3) RETURNING *;
  `;
	const values = [order.customer_id, order.order_date, order.status];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error creating order:", error);
		throw error;
	}
}

// Get All Orders
export async function getAllOrders() {
	try {
		const result = await pool.query("SELECT * FROM Orders");
		return result.rows;
	} catch (error) {
		console.error("Error fetching orders:", error);
		throw error;
	}
}

// Get Order by ID
export async function getOrderById(orderId) {
	try {
		const result = await pool.query("SELECT * FROM Orders WHERE order_id = $1", [
			orderId,
		]);
		return result.rows[0];
	} catch (error) {
		console.error("Error fetching order:", error);
		throw error;
	}
}

// Update Order
export async function updateOrder(orderId, updatedFields) {
	const setValues = Object.keys(updatedFields)
		.map((key, index) => `${key} = $${index + 1}`)
		.join(", ");
	const values = [...Object.values(updatedFields), orderId];

	const query = `UPDATE Orders SET ${setValues} WHERE order_id = $${
		values.length
	} RETURNING *;`;

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error updating order:", error);
		throw error;
	}
}

// Delete Order
export async function deleteOrder(orderId) {
	try {
		const result = await pool.query("DELETE FROM Orders WHERE order_id = $1 RETURNING *", [
			orderId,
		]);
		return result.rows[0];
	} catch (error) {
		console.error("Error deleting order:", error);
		throw error;
	}
}
