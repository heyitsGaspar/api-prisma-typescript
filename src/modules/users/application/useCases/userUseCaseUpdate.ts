import { UserEntity } from "../../domain/entities/userEntity";
import { userRepository } from "../../infrastructure/repositories/userRepositoryPrisma";
import { NotFoundError } from "../../../../shared/errors/notFoundError";

export const userUseCaseUpdate = {
    async update(id: string, user: Partial<UserEntity>): Promise<UserEntity | null> {
        const userToUpdate = await userRepository.findById(id);
        if (!userToUpdate) {
            throw new NotFoundError();
        }
        return userRepository.update(id, user);
    }
}