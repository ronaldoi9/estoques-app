import { DeleteProductRepository } from '@/data'
import { DeleteApi, ReadApi } from '@/infra/repositories/contracts'

export class DeleteProductRepositoryImpl implements DeleteProductRepository {
  constructor(
    private readonly deleteApi: DeleteApi,
    private readonly readApi: ReadApi
  ) { }

  async get(id: number): Promise<any> {
    return await this.readApi.get(id)
  }

  async delete(id: number): Promise<void> {
    return this.deleteApi.delete(id)
  }
}
