import { Product } from '@/infra/database/models'
import { ReadProductRepositoryImpl } from '@/infra/repositories/product'
import { ReadApiImpl } from '@/infra/database/api'
import { ReadProductUseCaseImpl } from '@/data/services/product/read/use-case'
import { ProductModelMapper } from '@/data/mappers/product'
import { Controller } from '@/presentation/contracts'
import { ReadProductController } from '@/presentation/controllers/read-product'

export const readProductController = (): Controller => {
    const readApi = new ReadApiImpl(Product)
    const repository = new ReadProductRepositoryImpl(readApi)
    const modelMapper = new ProductModelMapper()
    const useCase = new ReadProductUseCaseImpl(repository, modelMapper)
    return new ReadProductController(useCase)
}