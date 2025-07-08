export interface UserEntity{
    id?: string;
    name: string;
    email: string;
    password: string;
    roleId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
