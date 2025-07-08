import { Router } from 'express';
import { usersController } from '../interfaces/controllers/usersController';
import { validateBody } from '../../../shared/middlewares/validate';
import { createUserSchema } from '../../../shared/schemas/users/users.schema';

export const usersRoutes = Router();

usersRoutes.post('/', validateBody(createUserSchema), usersController.create);