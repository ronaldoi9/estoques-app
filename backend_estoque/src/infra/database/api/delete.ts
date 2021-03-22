import { DeleteApi } from '@/infra/repositories/contracts'

export class DeleteApiImpl implements DeleteApi {
  constructor(private readonly sequelizeModel: any ) { }

  async delete(id: number): Promise<any> {
    try {
        const object = await this.sequelizeModel.findOne({ where: { id: id } })
        await object.destroy()
        return object
    } catch (error) {
      return error.message
    }
  }
}
