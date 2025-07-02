
import { Request, Response } from 'express';
import { productUseCaseCreate } from '../../application/useCases/productUseCaseCreate';
import { productUseCaseGet } from '../../application/useCases/productUseCaseGet';

export const productController = {
    /**
     * Creates a new product.
     * @param req - The request object containing product data.
     * @param res - The response object to send the created product.
     */
    async create(req: Request, res: Response): Promise<void> {
        try {
            const product = await productUseCaseCreate.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error creating product', error });
        }
    },

    
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const products = await productUseCaseGet.getAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }
}