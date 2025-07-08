import { UserEntity } from "../../domain/entities/userEntity";
import { userRepository } from "../../infrastructure/repositories/userRepositoryPrisma";
import bcrypt from "bcrypt";

export const createUserByAdminUseCase = {
    async create(user: UserEntity): Promise<UserEntity> {
        user.password = await bcrypt.hash(user.password, 10);
        return userRepository.create(user);
    }
}