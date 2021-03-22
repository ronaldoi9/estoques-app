import { Product } from '@/infra/database/models'
import { CreateProductRepositoryImpl } from '@/infra/repositories/product'
import { CreateImpl } from '@/infra/database/api'
import { CreateProductUseCaseImpl } from '@/data/services/product'
import { ProductModelMapper } from '@/data/mappers/product'
import { Controller } from '@/presentation/contracts'
import { CreateProductController } from '@/presentation/controllers/create-product'

export const createProductController = (): Controller => {
    const createApi = new CreateImpl(Product)
    const repository = new CreateProductRepositoryImpl(createApi)
    const modelMapper = new ProductModelMapper()
    const useCase = new CreateProductUseCaseImpl(repository, modelMapper)
    return new CreateProductController(useCase)
}