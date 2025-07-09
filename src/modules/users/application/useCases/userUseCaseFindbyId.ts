import { userRepository } from "../../infrastructure/repositories/userRepositoryPrisma";
import { UserEntity } from "../../domain/entities/userEntity";
import { NotFoundError } from "../../../../shared/errors/notFoundError";

export const userUseCaseFindById = {
    async findById(id: string): Promise<UserEntity | null> {
        const user = await userRepository.findById(id);
        if (!user) {
            throw new NotFoundError(`User with id ${id} not found`);
        }
        return user;
    }
}