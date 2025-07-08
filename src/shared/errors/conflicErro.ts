import { AppError } from './appError';

export class ConflictError extends AppError {
  constructor(message = 'Este recurso ya existe') {
    super(message, 409, false);
  }
}

export class UserAlreadyExistsError extends AppError {
  constructor(email: string) {
    super(`El usuario con el email ${email} ya existe`);
  }
}