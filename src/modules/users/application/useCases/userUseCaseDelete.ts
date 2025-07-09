
import { userRepository } from "../../infrastructure/repositories/userRepositoryPrisma";
import { NotFoundError } from "../../../../shared/errors/notFoundError";

export const userUseCaseDelete = {
    async delete(id: string): Promise<void> {
        const userToDelete = await userRepository.findById(id);
        if (!userToDelete) {
            throw new NotFoundError();
        }
        return userRepository.delete(id);
    }
}