import pool from "../config/db.js";

export async function createBook(book) {
	const query = `
    INSERT INTO Books (title, publisher_id, publication_year, isbn, price, category_id, stock_quantity)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;
	const values = [
		book.title,
		book.publisher_id,
		book.publication_year,
		book.isbn,
		book.price,
		book.category_id,
		book.stock_quantity,
	];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error creating book:", error);
		throw error;
	}
}

export async function getAllBooks() {
	const query = "SELECT * FROM Books";

	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (error) {
		console.error("Error fetching books:", error);
		throw error;
	}
}

export async function getBookById(bookId) {
	const query = "SELECT * FROM Books WHERE book_id = $1";
	const values = [bookId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error fetching book by ID:", error);
		throw error;
	}
}

export async function deleteBook(bookId) {
	const query = `
    DELETE FROM Books WHERE book_id = $1 RETURNING *;
  `;
	const values = [bookId];

	try {
		const result = await pool.query(query, values);
		return result.rows[0];
	} catch (error) {
		console.error("Error deleting book:", error);
		throw error;
	}
}

export async function updateBook(bookId, updatedFields) {
	const fields = Object.keys(updatedFields);
	const values = Object.values(updatedFields);

	if (fields.length === 0) {
		throw new Error("No fields provided for update");
	}

	const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
	const query = `UPDATE Books SET ${setClause} WHERE book_id = $${
    fields.length + 1
  } RETURNING *;`;

	try {
		const result = await pool.query(query, [...values, bookId]);
		return result.rows[0];
	} catch (error) {
		console.error("Error updating book:", error);
		throw error;
	}
}
