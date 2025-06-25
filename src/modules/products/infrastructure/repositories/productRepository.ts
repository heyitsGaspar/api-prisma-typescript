import { Prisma } from "../../../../config/prismaClient";
import { Product } from "../../domain/Product";
const prisma = Prisma;

export const productRepository = {
  async create (data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    return prisma.product.create({ data });
  },

  async findById (id: string): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } });
  },

  async findAll (): Promise<Product[]> {
    return prisma.product.findMany();
  },

  async update (id: string, data: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Product | null> {
    return prisma.product.update({ where: { id }, data });
  },

  async delete (id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
};
