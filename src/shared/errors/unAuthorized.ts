import { AppError } from './appError';

export class UnAuthorizedError extends AppError {
  constructor(message = 'No haz iniciado sesión') {
    super(message, 401, false);
  }
}