import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repository/UserRepository";


// criar um tipo de dado
interface IRequest {
    name: string,
    email: string,
    password: string
}

class CreateProductService {

    // cria função execute
    public async execute({name, price, quantity}: IRequest): Promise <Product> {
        // recupera o repositório do produto
        let productRepository = getCustomRepository(ProductRepository)
        let productExists = await productRepository.findByName(name);
        
        // regra de negócio
        if (productExists){
            console.log(`Vai entrar`)
            throw new AppError("Já existe produto com este nome");
        }

        // cria um novo produto que não existe
        const product = productRepository.create({
            name, price, quantity
        })

        // salva produto no banco de dados
        await productRepository.save(product);

        return product;
    }
}

export default CreateProductService;