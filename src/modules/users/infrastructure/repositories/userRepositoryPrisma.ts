import { UserEntity } from "../../domain/entities/userEntity";
import { UserRepositoryI } from "../../domain/repositories/userRepository";
import { prismaClient } from "../../../../config/prismaClient";

const prisma = prismaClient;

export const userRepository: UserRepositoryI = {
    async create(user: UserEntity): Promise<UserEntity> {
        return prisma.users.create({ data: user });
    }
}