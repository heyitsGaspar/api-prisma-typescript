import { z } from 'zod';

export const queryProductSchema = z.object({
    page: z.string().optional().transform(val  => parseInt(val ?? '1')).refine(val => val > 0, {
        message: 'Page must be greater than 0',
    }),
    limit: z.string().optional().transform(val  => parseInt(val ?? '10')).refine(val => val > 0,{
        message: 'Limit must be greater than 0',
    }),
});