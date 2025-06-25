import { productRepository } from "../../infrastructure/repositories/productRepository";
import { Product } from "../../domain/entities/product.entity";

export const productUseCaseCreate= {
  async create (data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    return productRepository.create(data);
  },
};
