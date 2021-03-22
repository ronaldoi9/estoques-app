export interface ReadApi {
  get: (id: number) => Promise<any>
  getMany: () => Promise<any>
}
