import { Model } from 'sequelize'
import { CreateApi } from '@/infra/repositories/contracts'

export class CreateImpl implements CreateApi {
  constructor(private readonly sequelizeModel: any) { }

  async create(object: any): Promise<any> {
    const newSequelizeObject: Model = await this.sequelizeModel.build(object)
    const newObject: any = await newSequelizeObject.save()
    return newObject.dataValues
  }

}
