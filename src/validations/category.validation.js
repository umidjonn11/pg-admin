import z from "zod"
/*
category_id SERIAL PRIMARY KEY,
      category_name VARCHAR(255) NOT NULL,
      description TEXT
      */

export const createCategorySchema=z.object({
categoryName:z.string().max(255),
description:z.string(),
})


export const updateCategorySchema=z.object({
    categoryName:z.string().max(255),
    description:z.string(),
    })

    