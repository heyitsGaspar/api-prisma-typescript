import { z } from 'zod';

export const createProductSchema = z.object({
    name: z.string().min(1, 'El nombre es obligatorio'),
    description: z.string().min(1, 'La descripción es obligatoria'),
    price: z.string().min(0, 'El precio debe ser un número positivo').optional(),
});

export const updateProductSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.string().optional(),
});


export const productSchemaQuery = z.object({
    page: z.string().optional().transform(val => val ? parseInt(val) : 1),
    limit: z.string().optional().transform(val => val ? parseInt(val) : 10),
    name: z.string().optional()
})