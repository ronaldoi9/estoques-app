import { Product } from '@/domain/entities'

export interface ReadProductUseCase {
  getOne: (id: number) => Promise<Product>
  getMany: () => Promise<Product[]>
}
