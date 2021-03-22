export interface DeleteProductRepository {
    get: (id: number) => Promise<any>
    delete: (id: number) => Promise<void>
}
  