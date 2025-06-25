import { Router } from 'express';
import { productController } from '../interfaces/controllers/productController';
import { validateBody, validateQuery } from '../../../shared/middlewares/validate';
import { createProductSchema} from '../../../shared/types/product/product.schema';

export const productRoutes = Router();

productRoutes.post('/', validateBody(createProductSchema), productController.create);