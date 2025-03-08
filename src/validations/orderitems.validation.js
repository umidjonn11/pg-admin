import z from "zod"
/*
 order_item_id SERIAL PRIMARY KEY,
      order_id INT,
      book_id INT,
      quantity INT,
      unit_price NUMERIC(10,2),
      CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES Orders(order_id),
      CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES Books(book_id)
      */

export const createOrderitemsSchema=z.object({
    quantity:z.number(),
    unit_price:z.number(),
})

export const updateOrderitemsSchema=z.object({
    quantity:z.number().optional(),
    unit_price:z.number().optional(),
})
