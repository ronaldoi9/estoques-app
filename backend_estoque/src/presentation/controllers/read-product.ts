import { ReadProductUseCase } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { ProductViewModel } from '@/presentation/view-models/product'

export class ReadProductController implements Controller {
    constructor(private readonly readProduct: ReadProductUseCase) {}

    async handle(id: number): Promise<HttpResponse<ProductViewModel[]>> {
        try{
            let data
            if(id)
                data = await this.readProduct.getOne(id)
            else
                data = await this.readProduct.getMany()
            return ok(data)
        }catch(error) {
            return serverError(error)
        }
    }
}