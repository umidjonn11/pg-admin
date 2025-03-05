import pool from "../config/db.js";

// Create a new customer
export async function createCustomer(customer) {
	const query = `
    INSERT INTO Customers (first_name, last_name, email, phone, address)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
	const values = [customer.first_name, customer.last_name, customer.email, customer.phone, customer.address];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error creating customer:", error);
		throw error;
	}
}

// Get all customers
export async function getAllCustomers() {
	const query = "SELECT * FROM Customers";

	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (error) {
		console.error("Error fetching customers:", error);
		throw error;
	}
}

// Get a customer by ID
export async function getCustomerById(customerId) {
	const query = "SELECT * FROM Customers WHERE customer_id = $1";
	const values = [customerId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error fetching customer by ID:", error);
		throw error;
	}
}

// Update a customer
export async function updateCustomer(customerId, updatedCustomer) {
	const query = `
    UPDATE Customers 
    SET first_name = $1, last_name = $2, email = $3, phone = $4, address = $5
    WHERE customer_id = $6
    RETURNING *;
  `;
	const values = [updatedCustomer.first_name, updatedCustomer.last_name, updatedCustomer.email, updatedCustomer.phone, updatedCustomer.address, customerId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error updating customer:", error);
		throw error;
	}
}

// Delete a customer
export async function deleteCustomer(customerId) {
	const query = `DELETE FROM Customers WHERE customer_id = $1 RETURNING *;`;
	const values = [customerId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error deleting customer:", error);
		throw error;
	}
}
