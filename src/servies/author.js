import pool from "../config/db.js";

export async function createAuthor(author) {
	const query = `
        INSERT INTO Authors (first_name, last_name, bio)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;
	const values = [author.first_name, author.last_name, author.bio];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error creating author:", error);
		throw error;
	}
}

export async function getAllAuthors() {
	const query = "SELECT * FROM Authors";
	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (error) {
		console.error("Error fetching authors:", error);
		throw error;
	}
}

export async function getAuthorById(authorId) {
	const query = "SELECT * FROM Authors WHERE author_id = $1";
	const values = [authorId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error fetching author by ID:", error);
		throw error;
	}
}

export async function updateAuthor(authorId, updatedFields) {
	const setValues = Object.keys(updatedFields)
		.map((key, index) => `${key} = $${index + 1}`)
		.join(", ");
	const values = [...Object.values(updatedFields), authorId];

	const query = `UPDATE Authors SET ${setValues} WHERE author_id = $${
		values.length
	} RETURNING *;`;

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error updating author:", error);
		throw error;
	}
}


export async function deleteAuthor(authorId) {
	const query = "DELETE FROM Authors WHERE author_id = $1 RETURNING *";
	const values = [authorId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error deleting author:", error);
		throw error;
	}
}
