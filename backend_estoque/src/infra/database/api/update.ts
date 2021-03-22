import { UpdateApi } from '@/infra/repositories/contracts'

export class UpdateApiImpl implements UpdateApi {
  constructor(private readonly sequelizeModel: any) { }

  async update(objectToUpdate: any): Promise<any> {
    const sequelizeObject = await this.sequelizeModel.findOne({ where: { id: objectToUpdate.id } })

    for (const key in objectToUpdate) {
      sequelizeObject[key] = objectToUpdate[key]
    }

    return await sequelizeObject.save()
  }

}
