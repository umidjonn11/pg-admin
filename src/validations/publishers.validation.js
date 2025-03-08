import z, { number } from "zod"
/*
publisher_id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address TEXT,
 phone VARCHAR(50),
email VARCHAR(255)
      */

export const createPublisherSchema=z.object({
name:z.string().max(255),
address:z.string(),
phone:z.string(),
email:z.string().email(),
})


export const updatePublisherSchema=z.object({
    name:z.string().max(255).optional(),
    address:z.string().optional(),
    phone:z.string().optional(),
    email:z.string().email().optional(),
    })