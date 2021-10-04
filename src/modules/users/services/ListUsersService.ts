import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repository/UserRepository";


class ListUsersService {
    
    public async execute(): Promise<User[]>{

        // recupera o repositório do produto
        let userRepository = getCustomRepository(UserRepository)

        let users = await userRepository.find()

        return users;
    }
}

export default ListUsersService;