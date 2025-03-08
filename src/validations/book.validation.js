import z from "zod"
/*
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
    */
export const createBookSchema=z.object({
isbn:z.string().max(20),
price:z.number(),
stock_quantity:z.number(),
publication_year:z.number(),
title:z.string().max(255),
})

export const updateBookSchema=z.object({
isbn:z.string().max(20).optional(),
price:z.number().optional(),
stock_quantity:z.number().optional(),
publication_year:z.number().optional(),
title:z.string().max(255).optional(),
})