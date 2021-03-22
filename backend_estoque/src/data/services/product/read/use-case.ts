import { ReadProductRepository } from './repository'
import { Product } from '@/domain/entities/product'
import { ReadProductUseCase } from '@/domain/usecases/product/read'
import { ReadObjectNotFound } from '@/domain/entities/product/read'
import { BaseModelMapper } from '@/data/mappers/base-model'

export class ReadProductUseCaseImpl implements ReadProductUseCase {
  constructor(
    private readonly repository: ReadProductRepository,
    private readonly modelMapper: BaseModelMapper
  ) { }

  async getOne(id: number): Promise<Product> {
    const model: any = await this.repository.getOne(id)
    if (!model) {
      throw new ReadObjectNotFound()
    } else {
      return this.modelMapper.fromModelToReadOneResponse(model)
    }
  }

  async getMany(): Promise<any> {
    const result = await this.repository.getMany()
    return {
      items: this.modelMapper.fromModelToReadManyResponse(result.items)
    }
  }
}
