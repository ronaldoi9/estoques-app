import { Product } from '@/domain/entities'

export interface UpdateProductUseCase {
  update: (object: Product) => Promise<Product>
}