import { AppError } from './appError';

export class UnAuthorizedError extends AppError {
  constructor(message = 'No autorizado para acceder a este recurso') {
    super(message, 401, false);
  }
}