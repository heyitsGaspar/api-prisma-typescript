import { UserEntity } from "../entities/userEntity";

export interface UserRepositoryI {
    create(user: UserEntity): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity | null>;
    getAll(skip: number, take: number): Promise<UserEntity[]>;
    findById(id: string): Promise<UserEntity | null>;
    update(id: string, user: Partial<UserEntity>): Promise<UserEntity | null>;
    delete(id: string): Promise<void>;
    count(): Promise<number>;
}