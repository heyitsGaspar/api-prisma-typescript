import { prismaClient } from "../../../../config/prismaClient";
import { Product } from "../../domain/entities/product.entity";
import { ProductRepositoryI } from '../../domain/repositories/productRepositoryI';

const prisma = prismaClient;

export const productRepository: ProductRepositoryI = {
  /**
   * Creates a new product in the database.
   * @param data - The product data to create.
   * @returns The created product.
   */
  async create (data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    return prisma.product.create({ data });
  },
  /**
   * Finds a product by its ID.
   * @param id - The ID of the product to find.
   * @returns The found product or null if not found.
   */
  async findById (id: string): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } });
  },
  
  async findAllPaginated (skip: number, take: number): Promise<Product[]> {
    return prisma.product.findMany({
      skip,
      take,
      orderBy: { createdAt: 'desc' }
    });
  },

  async count(): Promise<number> {
    return prisma.product.count();
  },

  async update (id: string, data: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Product | null> {
    return prisma.product.update({ where: { id }, data });
  },

  async delete (id: string): Promise<void> {
    await prisma.product.delete({ where: { id } });
  }
};
