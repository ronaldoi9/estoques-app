import { CreateProductRepository } from './repository'
import { Product } from '@/domain/entities/product'
import { CreateProductUseCase } from '@/domain/usecases/product/create'
import { BaseModelMapper } from '@/data/mappers/base-model'

export class CreateProductUseCaseImpl implements CreateProductUseCase {
  constructor(
    private readonly repository: CreateProductRepository,
    private readonly modelMapper: BaseModelMapper,
  ) { }

  async create(request: Product): Promise<Product> {
    const objectModel = this.modelMapper.fromCreateRequestDTOToModel(request)
    return await this.repository.create(objectModel)
  }
}
