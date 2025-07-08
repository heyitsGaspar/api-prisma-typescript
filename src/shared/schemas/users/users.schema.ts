import { z } from 'zod';

export const createUserSchema = z.object({
    name: z.string().trim().min(1, 'El nombre es obligatorio'),
    email: z.string().email().trim().min(1, 'El email es obligatorio'),
    password: z.string().trim().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    roleId: z.number().int().positive().min(1, 'El rol es obligatorio')
});