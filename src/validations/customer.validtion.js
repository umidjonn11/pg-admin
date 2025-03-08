import z from "zod"

/*
customer_id SERIAL PRIMARY KEY,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      email VARCHAR(255),
      phone VARCHAR(50),
      address TEXT

      */

export const createCustomerSchema=z.object({
    first_name: z.string().min(3),
	last_name: z.string().min(3),
	email: z.string().email(),
	phone: z.string().min(12),
	address: z.string().optional(),
})


export const updateCustomerSchema=z.object({
    first_name: z.string().min(3).optional(),
	last_name: z.string().min(3).optional(),
	email: z.string().email().optional(),
	phone: z.string().min(12).optional(),
	address: z.string().optional().optional(),
})