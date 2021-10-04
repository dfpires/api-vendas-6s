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

class CreateUserService {

    // cria função execute
    public async execute({name, email, password}: IRequest): Promise <User> {
        // recupera o repositório do produto
        let userRepository = getCustomRepository(UserRepository)
        let userExists = await userRepository.findByEmail(email);
        
        // regra de negócio
        if (userExists){
            throw new AppError("Já existe usuário com este email");
        }

        // cria um novo produto que não existe
        const user = userRepository.create({
            name, email, password
        })

        // salva produto no banco de dados
        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;