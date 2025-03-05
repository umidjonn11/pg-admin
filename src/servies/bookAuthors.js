import pool from "../config/db.js";

export async function createBookAuthor(bookAuthor) {
	const query = `
    INSERT INTO BookAuthors (book_id, author_id)
    VALUES ($1, $2)
    RETURNING *;
  `;
	const values = [bookAuthor.book_id, bookAuthor.author_id];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error creating book-author relationship:", error);
		throw error;
	}
}

export async function getAllBookAuthors() {
	const query = "SELECT * FROM BookAuthors";

	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (error) {
		console.error("Error fetching book-author relationships:", error);
		throw error;
	}
}

export async function getBookAuthorById(bookAuthorId) {
	const query = "SELECT * FROM BookAuthors WHERE id = $1";
	const values = [bookAuthorId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error fetching book-author relationship by ID:", error);
		throw error;
	}
}

export async function updateBookAuthor(bookAuthorId, bookAuthor) {
	const query = `
    UPDATE BookAuthors
    SET book_id = $1, author_id = $2
    WHERE id = $3
    RETURNING *;
  `;
	const values = [bookAuthor.book_id, bookAuthor.author_id, bookAuthorId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error updating book-author relationship:", error);
		throw error;
	}
}

export async function deleteBookAuthor(bookAuthorId) {
	const query = `DELETE FROM BookAuthors WHERE id = $1 RETURNING *;`;
	const values = [bookAuthorId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error deleting book-author relationship:", error);
		throw error;
	}
}
