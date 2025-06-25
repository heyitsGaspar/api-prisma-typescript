import { AppError } from './appError';

export class ForbidenError extends AppError {
  constructor(message = 'No autorizado para acceder a este recurso') {
    super(message, 403, false);
  }
}