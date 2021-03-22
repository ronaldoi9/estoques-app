import { AppError } from '@/domain/app-error'

export class ObjectToDeleteNotFound extends AppError {
  constructor() {
    super('ObjectToDeleteNotFound', 'Não foi possível encontrar esse objeto', true)
  }
}
