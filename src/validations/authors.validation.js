import { z } from "zod"; 

/* 
   author_id SERIAL PRIMARY KEY,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      bio TEXT
      */
export const createAuthorSchema=z.object({
    first_name: z.string().min(3),
	last_name: z.string().min(3),
    bio:z.string().max(300)
})

export const updateAuthorSchema=z.object({
    first_name: z.string().min(3).optional(),
	last_name: z.string().min(3).optional(),
    bio:z.string().max(300).optional(),
})