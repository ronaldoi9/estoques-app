import { UpdateProductRepository } from './repository'
import { Product } from '@/domain/entities/product'
import { UpdateProductUseCase } from '@/domain/usecases/product/update'
import { ObjectToUpdateNotFound } from '@/domain/entities/product/update'
import { BaseModelMapper } from '@/data/mappers/base-model'

export class UpdateProductUseCaseImpl implements UpdateProductUseCase {
  constructor(
    private readonly repository: UpdateProductRepository,
    private readonly modelMapper: BaseModelMapper
  ) { }

  async update(request: Product): Promise<Product> {
    await this.verifyCurrentObject(request.id)

    const objectToUpdate = this.modelMapper.fromUpdateRequestDTOToModel(request)
    return await this.repository.update(objectToUpdate)

  }

  async verifyCurrentObject(id: number): Promise<void> {
    const currentObject: any = await this.repository.get(id)
    if (!currentObject) {
      throw new ObjectToUpdateNotFound()
    }
  }
}
