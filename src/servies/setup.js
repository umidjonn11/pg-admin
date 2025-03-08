import pool from "../config/db.js";

// Set up all tables
export const setUp = async () => {
  const createPublishersTableQuery = `
    CREATE TABLE IF NOT EXISTS Publishers (
      publisher_id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address TEXT,
      phone VARCHAR(50),
      email VARCHAR(255)
    );
  `;

  const createCategoriesTableQuery = `
    CREATE TABLE IF NOT EXISTS Categories (
      category_id SERIAL PRIMARY KEY,
      category_name VARCHAR(255) NOT NULL,
      description TEXT
    );
  `;

  const createBooksTableQuery = `
    CREATE TABLE IF NOT EXISTS Books (
      book_id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      publisher_id INT,
      publication_year INT,
      isbn VARCHAR(20),
      price NUMERIC(10,2),
      category_id INT,
      stock_quantity INT,
      CONSTRAINT fk_publisher FOREIGN KEY (publisher_id) REFERENCES Publishers(publisher_id),
      CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES Categories(category_id)
    );
  `;

  const createAuthorsTableQuery = `
    CREATE TABLE IF NOT EXISTS Authors (
      author_id SERIAL PRIMARY KEY,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      bio TEXT
    );
  `;

  const createBookAuthorsTableQuery = `
    CREATE TABLE IF NOT EXISTS BookAuthors (
      book_id INT,
      author_id INT,
      CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES Books(book_id),
      CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES Authors(author_id),
      CONSTRAINT pk_book_authors PRIMARY KEY (book_id, author_id)
    );
  `;

  const createCustomersTableQuery = `
    CREATE TABLE IF NOT EXISTS Customers (
      customer_id SERIAL PRIMARY KEY,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      email VARCHAR(255),
      phone VARCHAR(50),
      address TEXT
    );
  `;

  const createOrdersTableQuery = `
    CREATE TABLE IF NOT EXISTS Orders (
      order_id SERIAL PRIMARY KEY,
      customer_id INT,
      order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      status VARCHAR(50),
      CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
    );
  `;
  const createUsersTableQuery=`
  CREATE TABLE IF NOT EXISTS Users(
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  password varchar(255) not null,
  email VARCHAR(255),
  phone VARCHAR(50),
  address TEXT
  );
  
  `

  const createOrderItemsTableQuery = `
    CREATE TABLE IF NOT EXISTS OrderItems (
      order_item_id SERIAL PRIMARY KEY,
      order_id INT,
      book_id INT,
      quantity INT,
      unit_price NUMERIC(10,2),
      CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES Orders(order_id),
      CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES Books(book_id)
    );
  `;

  try {
    await Promise.all([
        await pool.query(createPublishersTableQuery),
        await pool.query(createCategoriesTableQuery),
        await pool.query(createCustomersTableQuery), // Ensure Customers is created first
        await pool.query(createOrdersTableQuery), // Now Orders can reference Customers
        await pool.query(createBooksTableQuery),
        await pool.query(createAuthorsTableQuery),
        await pool.query(createBookAuthorsTableQuery),
        await pool.query(createOrderItemsTableQuery),
        await pool.query(createUsersTableQuery),
      ]);
      

    console.log("All tables have been created (if they did not already exist).");
  } catch (err) {
    console.error("Error creating tables:", err);
    throw new Error("Error creating tables");
  }
};
