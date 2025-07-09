import { Request, Response, NextFunction } from 'express';
import { createUserByAdminUseCase } from '../../../users/application/useCases/createUserUseCase';
import { userUseCaseGetAll } from '../../application/useCases/userUseCaseGetAll';

export const usersController = {

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = await createUserByAdminUseCase.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    },

    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { page, limit } = req.validatedQueryPagination ?? req.query;
            const result = await userUseCaseGetAll.getAll(Number(page) || 1, Number(limit) || 10);
            res.status(200).json({
                data: result.users,
                meta: {
                    total: result.total,
                    page: result.page,
                    limit: result.limit,
                    totalPages: result.totalPages,
                    nextPage: result.nextPage,
                    prevPage: result.prevPage
                }
            });
        }
        catch (error) {
            next(error);
        }
    }
}