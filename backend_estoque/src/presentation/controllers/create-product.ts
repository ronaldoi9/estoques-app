import { CreateProductUseCase } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { ProductViewModel } from '@/presentation/view-models/product'

export class CreateProductController implements Controller {
    constructor(private readonly createProduct: CreateProductUseCase) {}

    async handle(body: any): Promise<HttpResponse<ProductViewModel>> {
        try{
            const data = await this.createProduct.create(body)
            return ok(data)
        }catch(error) {
            return serverError(error)
        }
    }
}