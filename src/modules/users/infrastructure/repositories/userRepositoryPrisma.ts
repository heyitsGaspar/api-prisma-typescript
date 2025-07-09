import { UserEntity } from "../../domain/entities/userEntity";
import { UserRepositoryI } from "../../domain/repositories/userRepository";
import { prismaClient } from "../../../../config/prismaClient";

const prisma = prismaClient;

export const userRepository: UserRepositoryI = {
    async create(user: UserEntity): Promise<UserEntity> {
        return prisma.users.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                role: {
                    connect: { id: user.roleId }
                }
            },
            include:{
                role: true // Include the role in the response
            }
        });
    },
    

    async findByEmail(email: string): Promise<UserEntity | null> {
        return prisma.users.findUnique({
            where: { email },
            
        });
    },

    async getAll(skip: number, take: number): Promise<UserEntity[]> {
        return prisma.users.findMany({
            skip,
            take,
            include: {
                role: true // Include the role in the response
            }
        });
    },

    async findById(id: string): Promise<UserEntity | null> {
        return prisma.users.findUnique({
            where: { id },
            include: {
                role: true // Include the role in the response
            }
        });
    },

    async update(id: string, user: Partial<UserEntity>): Promise<UserEntity | null> {
        return prisma.users.update({
            where: { id },
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                role: {
                    connect: { id: user.roleId }
                }
            },
            include: {
                role: true // Include the role in the response
            }
        });
    },

    async delete(id: string): Promise<void> {
        await prisma.users.delete({
            where: { id }
        });
    },

    async count(): Promise<number> {
        return prisma.users.count();
    },
    
}