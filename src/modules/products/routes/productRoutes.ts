import { Router } from 'express';
import { productController } from '../interfaces/controllers/productController';
import { validateBody, validatedQuery } from '../../../shared/middlewares/validate';
import { createProductSchema} from '../../../shared/schemas/product/product.schema';
import { queryProductSchema } from '../../../shared/schemas/product/query.schema';

export const productRoutes = Router();

productRoutes.post('/', validateBody(createProductSchema), productController.create);
productRoutes.get('/', validatedQuery(queryProductSchema), productController.getAll);