import { Product } from '@/infra/database/models'
import { DeleteProductRepositoryImpl } from '@/infra/repositories/product'
import { DeleteApiImpl, ReadApiImpl } from '@/infra/database/api'
import { DeleteProductUseCaseImpl } from '@/data/services/product/delete/use-case'
import { Controller } from '@/presentation/contracts'
import { DeleteProductController } from '@/presentation/controllers/delete-product'

export const deleteProductController = (): Controller => {
    const readApi = new ReadApiImpl(Product)
    const deleteApi = new DeleteApiImpl(Product)
    const repository = new DeleteProductRepositoryImpl(deleteApi, readApi)
    const useCase = new DeleteProductUseCaseImpl(repository)
    return new DeleteProductController(useCase)
}