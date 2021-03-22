import { ReadProductRepository } from '@/data'
import { ReadApi } from '@/infra/repositories/contracts'

export class ReadProductRepositoryImpl implements ReadProductRepository {
  constructor(
    private readonly readApi: ReadApi
  ) { }

  async getOne(id: number): Promise<any> {
    return await this.readApi.get(id)
  }

  async getMany(): Promise<any> {
    return await this.readApi.getMany()
  }
}