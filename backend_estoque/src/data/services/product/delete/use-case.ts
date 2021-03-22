import { DeleteProductRepository } from './repository'
import {
  DeleteProductUseCase,
  DeleteProductRequestDTO,
  DeleteProductResponseDTO,
  ObjectToDeleteNotFound
} from '@/domain'

export class DeleteProductUseCaseImpl implements DeleteProductUseCase {
  constructor(private readonly repo: DeleteProductRepository) { }

  async delete(request: DeleteProductRequestDTO): Promise<DeleteProductResponseDTO> {
    const object = await this.repo.get(request)
    if (object) {
      await this.repo.delete(request)
      return 'Item removido com sucesso'
    } else {
      throw new ObjectToDeleteNotFound()
    }
  }
}
