import { UpdateProductRepository } from '@/data'
import { ReadApi, UpdateApi } from '@/infra/repositories/contracts'
import { schema } from './schema'

export class UpdateProductRepositoryImpl implements UpdateProductRepository {
  constructor(
    private readonly updateApi: UpdateApi,
    private readonly readApi: ReadApi
  ) { }

  async update(object: any): Promise<any> {
    const objectToValidate = {
      name: object.name,
      quantity: object.quantity,
      price: object.price
    }
    const isValidObject = await schema.validate(objectToValidate)

    if (isValidObject.error){
      throw new Error(isValidObject.error.message)
    }else {
      return await this.updateApi.update(object)
    }
  }

  async get(id: number): Promise<any> {
    return await this.readApi.get(id)
  }
}