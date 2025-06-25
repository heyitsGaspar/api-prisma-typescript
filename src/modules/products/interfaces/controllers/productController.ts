import {Request, Response} from 'express';
import { productUseCaseCreate } from '../../application/useCases/productUseCaseCreate';

export const productController ={
    async create(req: Request, res: Response): Promise<void> {
        try {
            const product = await productUseCaseCreate.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error creating product', error });
        }
    }
}