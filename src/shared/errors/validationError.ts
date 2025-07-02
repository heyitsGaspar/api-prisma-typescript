import { AppError } from './appError';

export class ValidationError extends AppError {
    public readonly details: any;
    
    constructor(errors: any) {
        super('Error de validación', 400, false);
        this.details = errors;
    }
}