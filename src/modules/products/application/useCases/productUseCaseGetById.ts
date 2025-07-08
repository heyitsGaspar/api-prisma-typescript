import { productRepository } from "../../infrastructure/repositories/productRepository";
import { Product } from "../../domain/entities/product.entity";
import {NotFoundError} from "../../../../shared/errors/notFoundError";

export const productUseCaseGetById= {
    async getById(id: string): Promise<Product | null> {
        const product = await productRepository.findById(id);
        if (!product) {
            throw new NotFoundError();
        }
        return product;
    }
}