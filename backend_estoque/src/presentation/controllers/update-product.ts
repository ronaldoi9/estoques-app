import { UpdateProductUseCase } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { ProductViewModel } from '@/presentation/view-models/product'

export class UpdateProductController implements Controller {
    constructor(private readonly updateProduct: UpdateProductUseCase) {}

    async handle(body: any): Promise<HttpResponse<ProductViewModel>> {
        try{
            const data = await this.updateProduct.update(body)
            return ok(data)
        }catch(error) {
            return serverError(error)
        }
    }
}