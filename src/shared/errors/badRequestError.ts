import { AppError } from './appError';

export class BadRequestError extends AppError {
  constructor(message = 'Peticion incorrecta') {
    super(message, 400, false);
  }
}