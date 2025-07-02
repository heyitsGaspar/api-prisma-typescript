import { Product } from "../entities/product.entity";

export interface ProductRepositoryI {
  create(data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  findAllPaginated(skip: number, take: number): Promise<Product[]>;
  update(id: string, data: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Product | null>;
  delete(id: string): Promise<void>;
  count(): Promise<number>;
}
