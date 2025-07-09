import { z } from 'zod';

export const createProductSchema = z.object({
    name: z.string().trim().min(1, 'El nombre es obligatorio'),
    description: z.string().trim().min(1, 'La descripción es obligatoria'),
    price: z.number().positive('El precio debe ser mayor a 0')

});

export const updateProductSchema = z.object({
    name: z.string().trim().min(1, 'El nombre no puede estar vacío').optional(),
    description: z.string().trim().min(1, 'La descripción no puede estar vacía').optional(),
    price: z.number().positive('El precio debe ser mayor a 0').optional()
});



export const productSchemaQuery = z.object({
    page: z.string().optional().transform(val => val ? parseInt(val) : 1),
    limit: z.string().optional().transform(val => val ? parseInt(val) : 10),
    name: z.string().optional()
})