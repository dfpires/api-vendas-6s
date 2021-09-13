
// vamos criar a interface de coleta de dados
import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface IRequest {
    id: string
}

// criar classe
class DeleteProductService {

    // cria método execute
    public async execute({id}: IRequest): Promise<void>{
        // recupera o repositório do produto
        let productRepository = getCustomRepository(ProductRepository);
        // recupera o produto para remover
        let product = await productRepository.findOne(id)
        if (!product) { //produto não existe
            throw new AppError('Produto não existe')
        }
        // produto existe
        await productRepository.remove(product);
    }

}

export default DeleteProductService