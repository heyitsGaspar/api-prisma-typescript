import { productRepository } from "../../infrastructure/repositories/productRepository";
import { Product } from "../../domain/entities/product.entity";

export const productUseCaseGet= {
    async getAll(page: number, limit: number): Promise<{ 
        products: Product[]; 
        total: number; 
        page: number; 
        limit: number; 
        totalPages: number; 
        nextPage?: number; 
        prevPage?: number 
    }> {
        const skip = (page - 1) * limit;
        const [products, total] = await Promise.all([
            productRepository.findAllPaginated(skip, limit),
            productRepository.count()
        ]);

        const totalPages = Math.ceil(total / limit);
        const nextPage = page + 1 <= totalPages ? page + 1 : undefined;
        const prevPage = page - 1 >= 1 ? page - 1 : undefined;

        return {
            products,
            total,
            page,
            limit,
            totalPages,
            nextPage,
            prevPage
        };
    }
}
