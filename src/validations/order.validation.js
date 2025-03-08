import z from "zod"
/*
 order_id SERIAL PRIMARY KEY,
      customer_id INT,
      order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      status VARCHAR(50),
      CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
    );
    */

export const createOrderSchema=z.object({
order_date:z.string(),
status:z.string().max(50),
})


export const updateOrderSchema=z.object({
order_date:z.string().optional(),
status:z.string().max(50).optional(),
})