import { Request, Response, NextFunction } from 'express';
import { AppError} from '../errors/appError';
import { ValidationError } from '../errors/validationError';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => { // retorna void explicitamente
    if (err instanceof ValidationError) {
        res.status(err.statusCode).json({
            status: 'fail',
            message: err.message,
            errors: err.details
        });
        return;
    }

    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            status: 'fail',
            message: err.message
        });
        return;
    }

    console.error('Error inesperado:', err);

    res.status(500).json({
        status: 'error',
        message: 'Error interno del servidor'
    });
};
