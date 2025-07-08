import { Request, Response, NextFunction } from 'express';
import { createUserByAdminUseCase } from '../../../users/application/useCases/createUserUseCase';


export const usersController = {

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = await createUserByAdminUseCase.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }
}