export interface UpdateProductRepository {
  update: (object: any) => Promise<any>
  get: (id: number) => Promise<any>
}