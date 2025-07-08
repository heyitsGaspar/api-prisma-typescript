import { productRepository } from "../../infrastructure/repositories/productRepository";
import { Product } from "../../domain/entities/product.entity";

export const productUseCaseUpdate = {
    async update(id: string, data: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Product | null> {
        return productRepository.update(id, data);
    },
};