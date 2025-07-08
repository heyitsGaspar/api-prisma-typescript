import { UserEntity } from "../entities/userEntity";

export interface UserRepositoryI {
    create(user: UserEntity): Promise<UserEntity>;
}