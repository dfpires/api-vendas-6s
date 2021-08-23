import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";


class ListProductsService {
    
    public async execute(): Promise<Product[]>{

        // recupera o repositório do produto
        let productRepository = getCustomRepository(ProductRepository)

        let products = await productRepository.find()

        return products;
    }
}

export default ListProductsService;