import { AppError } from '@/domain/app-error'

export class ReadObjectNotFound extends AppError {
  constructor() {
    super('ReadObjectNotFound', 'Objeto não encontrado', true)
  }
}
