import { Router } from 'express';
import { productController } from '../interfaces/controllers/productController';
import { validateBody, validatedQuery } from '../../../shared/middlewares/validate';
import { createProductSchema, updateProductSchema} from '../../../shared/schemas/product/product.schema';
import { queryProductSchema } from '../../../shared/schemas/product/query.schema';

export const productRoutes = Router();

productRoutes.post('/', validateBody(createProductSchema), productController.create);
productRoutes.get('/', validatedQuery(queryProductSchema), productController.getAll);
productRoutes.get('/:id', productController.getById);
productRoutes.put('/:id', validateBody(updateProductSchema), productController.update);
productRoutes.delete('/:id', productController.delete);
