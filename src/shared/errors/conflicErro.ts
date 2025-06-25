import { AppError } from './appError';

export class ConflictError extends AppError {
  constructor(message = 'Este recurso ya existe') {
    super(message, 409, false);
  }
}