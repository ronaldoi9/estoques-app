import { AppError } from '@/domain/app-error'

export class ObjectToUpdateNotFound extends AppError {
  constructor() {
    super('ObjectToUpdateNotFound', 'Não foi possível encontrar o objeto que será atualizado', true)
  }
}
