import { Product } from '@/infra/database/models'
import { UpdateProductRepositoryImpl } from '@/infra/repositories/product'
import { UpdateApiImpl } from '@/infra/database/api'
import { ReadApiImpl } from '@/infra/database/api'
import { UpdateProductUseCaseImpl } from '@/data/services/product/update/use-case'
import { ProductModelMapper } from '@/data/mappers/product'
import { Controller } from '@/presentation/contracts'
import { UpdateProductController } from '@/presentation/controllers/update-product'

export const updateProductController = (): Controller => {
    const readApi = new ReadApiImpl(Product)
    const updateApi = new UpdateApiImpl(Product)
    const repository = new UpdateProductRepositoryImpl(updateApi, readApi)
    const modelMapper = new ProductModelMapper()
    const useCase = new UpdateProductUseCaseImpl(repository, modelMapper)
    return new UpdateProductController(useCase)
}