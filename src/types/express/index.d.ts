import * as express from 'express';

declare global {
    namespace Express {
        interface Request {
            validatedQueryPagination?: {
                page: number;
                limit: number;
            }
        }
    }
}