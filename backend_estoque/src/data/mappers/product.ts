import { CreateProductRequestDTO, ReadProductResponseDTO, UpdateProductRequestDTO } from '@/domain'
import { BaseModelMapper } from '@/data/mappers/base-model'
import { ProductModel } from '@/data/models'

export class ProductModelMapper implements BaseModelMapper {
  fromCreateRequestDTOToModel(request: CreateProductRequestDTO): Omit<ProductModel, 'id'> {
    return request
  }

  fromModelToReadOneResponse(model: ProductModel): ReadProductResponseDTO {
    return model
  }

  fromModelToReadManyResponse(models: ProductModel[]): ReadProductResponseDTO[] {
    return models.map(this.fromModelToReadOneResponse)
  }

  fromUpdateRequestDTOToModel(request: UpdateProductRequestDTO): ProductModel {
    return request
  }
}
