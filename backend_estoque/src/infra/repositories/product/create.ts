import { CreateProductRepository } from '@/data'
import { CreateApi } from '@/infra/repositories/contracts'
import { schema } from './schema'

export class CreateProductRepositoryImpl implements CreateProductRepository {
  constructor(
    private readonly createApi: CreateApi
  ) { }

  async create(object: any): Promise<any> {
    const isValidObject = await schema.validate(object)

    if (isValidObject.error){
      throw new Error(isValidObject.error.message)
    }else {
      return await this.createApi.create(object)
    }
  }

}