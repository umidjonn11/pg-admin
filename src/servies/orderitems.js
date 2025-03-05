import pool from "../config/db.js";

export async function createOrderItem(orderItem) {
	const query = `
    INSERT INTO OrderItems (order_id, book_id, quantity, unit_price)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
	const values = [orderItem.order_id, orderItem.book_id, orderItem.quantity, orderItem.unit_price];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error creating order item:", error);
		throw error;
	}
}

export async function getAllOrderItems() {
	const query = "SELECT * FROM OrderItems";

	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (error) {
		console.error("Error fetching order items:", error);
		throw error;
	}
}

export async function getOrderItemById(orderItemId) {
	const query = "SELECT * FROM OrderItems WHERE order_item_id = $1";
	const values = [orderItemId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error fetching order item by ID:", error);
		throw error;
	}
}

export async function updateOrderItem(orderItemId, orderItem) {
	const query = `
    UPDATE OrderItems
    SET order_id = $1, book_id = $2, quantity = $3, unit_price = $4
    WHERE order_item_id = $5
    RETURNING *;
  `;
	const values = [orderItem.order_id, orderItem.book_id, orderItem.quantity, orderItem.unit_price, orderItemId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error updating order item:", error);
		throw error;
	}
}

export async function deleteOrderItem(orderItemId) {
	const query = `DELETE FROM OrderItems WHERE order_item_id = $1 RETURNING *;`;
	const values = [orderItemId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error deleting order item:", error);
		throw error;
	}
}
