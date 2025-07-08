import { Request, Response } from 'express';
import { createUserByAdminUseCase} from '../../../users/application/useCases/createUserUseCase';


export const usersController = {

    async create (req: Request, res: Response): Promise<void> {
        try {
            const user = await createUserByAdminUseCase.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            console.error('[Create User Error]', error);
    res.status(500).json({ error: 'Internal Server Error' });
            
        }
    }
}