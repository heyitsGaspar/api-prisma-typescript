import { Request, Response, NextFunction } from 'express';
import { createUserByAdminUseCase } from '../../../users/application/useCases/createUserUseCase';
import { userUseCaseGetAll } from '../../application/useCases/userUseCaseGetAll';
import { userUseCaseFindById } from '../../application/useCases/userUseCaseFindbyId';
import { userUseCaseUpdate } from '../../application/useCases/userUseCaseUpdate';
import { userUseCaseDelete } from '../../application/useCases/userUseCaseDelete';

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
    },

    async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = await userUseCaseFindById.findById(req.params.id);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            }
            
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = await userUseCaseUpdate.update(req.params.id, req.body);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.status(200).json(user);
            }
        } catch (error) {
            next(error);
        }
    },

    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await userUseCaseDelete.delete(req.params.id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}