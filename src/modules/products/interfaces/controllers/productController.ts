
import { Request, Response, NextFunction  } from 'express';
import { productUseCaseCreate } from '../../application/useCases/productUseCaseCreate';
import { productUseCaseGet } from '../../application/useCases/productUseCaseGet';
import { productUseCaseGetById } from '../../application/useCases/productUseCaseGetById';

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
            const { page, limit } = req.validatedQueryPagination ?? req.query;
            const result = await productUseCaseGet.getAll(Number(page) || 1, Number(limit) || 10);
            res.status(200).json({
                data: result.products,
                meta: {
                    total: result.total,
                    page: result.page,
                    limit: result.limit,
                    totalPages: result.totalPages,
                    nextPage: result.nextPage,
                    prevPage: result.prevPage
                }
            })
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    }, 

    async getById(req: Request, res: Response, next: NextFunction): Promise<void> { 
        try {
            const product = await productUseCaseGetById.getById(req.params.id);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json(product);
        } catch (error) {
           next(error); // Pass the error to the next middleware for centralized error handling
        }
    }
    

    
}