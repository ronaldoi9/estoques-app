import { Product } from '@/domain/entities'

export interface CreateProductUseCase {
  create: (object: Product) => Promise<Product>
}