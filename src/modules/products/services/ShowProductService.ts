import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface IRequest {
    id: string
}

class ShowProductService {
    public async execute({id}: IRequest): Promise<Product> {

        let productRepository = getCustomRepository(ProductRepository);
        let product = await productRepository.findOne(id);
        // produto não existe
        if (!product){
            throw new AppError('Produto não foi encontrado');
        }
        // produto existe
        return product;
    }
}

export default ShowProductService