import pool from "../config/db.js";

export async function createPublisher(publisher) {
	const query = `
    INSERT INTO Publishers (name, address, phone, email)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
	const values = [publisher.name, publisher.address, publisher.phone, publisher.email];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error creating publisher:", error);
		throw error;
	}
}

export async function getAllPublishers() {
	const query = "SELECT * FROM Publishers";

	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (error) {
		console.error("Error fetching publishers:", error);
		throw error;
	}
}

export async function getPublisherById(publisherId) {
	const query = "SELECT * FROM Publishers WHERE publisher_id = $1";
	const values = [publisherId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error fetching publisher by ID:", error);
		throw error;
	}
}

export async function updatePublisher(publisherId, publisher) {
	const query = `
    UPDATE Publishers
    SET name = $1, address = $2, phone = $3, email = $4
    WHERE publisher_id = $5
    RETURNING *;
  `;
	const values = [publisher.name, publisher.address, publisher.phone, publisher.email, publisherId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error updating publisher:", error);
		throw error;
	}
}

export async function deletePublisher(publisherId) {
	const query = `DELETE FROM Publishers WHERE publisher_id = $1 RETURNING *;`;
	const values = [publisherId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error deleting publisher:", error);
		throw error;
	}
}
