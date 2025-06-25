import { AppError } from './appError';

export class NotFoundError extends AppError {
  constructor(message = 'Recurso No Encontrado') {
    super(message, 404, false);
  }
}