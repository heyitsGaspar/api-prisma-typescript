import { userRepository } from "../../infrastructure/repositories/userRepositoryPrisma";
import { UserEntity } from "../../domain/entities/userEntity";

export const userUseCaseGetAll = {
    async getAll(page: number, limit: number): Promise<{ 
        users: UserEntity[]; 
        total: number; 
        page: number; 
        limit: number; 
        totalPages: number; 
        nextPage?: number; 
        prevPage?: number 
    }> {
        const skip = (page - 1) * limit;
        const [users, total] = await Promise.all([
            userRepository.getAll(skip, limit),
            userRepository.count()
        ]);

        const totalPages = Math.ceil(total / limit);
        const nextPage = page + 1 <= totalPages ? page + 1 : undefined;
        const prevPage = page - 1 >= 1 ? page - 1 : undefined;

        return {
            users,
            total,
            page,
            limit,
            totalPages,
            nextPage,
            prevPage
        };
    }
}