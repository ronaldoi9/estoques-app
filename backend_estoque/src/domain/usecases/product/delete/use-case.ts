import { DeleteProductRequestDTO, DeleteProductResponseDTO } from '@/domain/entities/product/delete'

export interface DeleteProductUseCase {
  delete: (id: DeleteProductRequestDTO) => Promise<DeleteProductResponseDTO>
}
