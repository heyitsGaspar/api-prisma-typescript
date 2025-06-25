import { AppError } from './appError';

export class NotFoundError extends AppError {
  constructor(message = 'Pagina No Encontrada') {
    super(message, 404, false);
  }
}