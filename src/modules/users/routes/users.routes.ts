import { Router } from 'express';
import { usersController } from '../interfaces/controllers/usersController';
import { validateBody, validatedQuery } from '../../../shared/middlewares/validate';
import { createUserSchema } from '../../../shared/schemas/users/users.schema';
import { querySchema } from '../../../shared/schemas/query.schema';


export const usersRoutes = Router();

usersRoutes.post('/', validateBody(createUserSchema), usersController.create);
usersRoutes.get('/', validatedQuery(querySchema), usersController.getAll);