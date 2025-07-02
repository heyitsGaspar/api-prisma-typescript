import { productRepository } from "../../infrastructure/repositories/productRepository";
import { Product } from "../../domain/entities/product.entity";

export const productUseCaseGet= {
    async getAll(): Promise<Product[]> {
        return productRepository.findAll();
    }
};