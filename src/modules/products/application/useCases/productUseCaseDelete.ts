import { productRepository } from "../../infrastructure/repositories/productRepository";

export const productUseCaseDelete = {
    async delete(id: string): Promise<void> {
        return productRepository.delete(id);
    },
};