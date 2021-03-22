export interface ReadProductRepository {
  getOne: (id: number) => Promise<any>
  getMany: () => Promise<any>
}
