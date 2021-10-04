import { request, Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import ListUsersService from "../services/ListUsersService";

export default class ProductController {

    // cria o produto
    public async create(request: Request, response: Response): Promise<Response> {
       let {name, email, password} = request.body;
        let createUser = new CreateUserService()
        let user = await createUser.execute({
            name, email, password
        })
        return response.json(user);
    }
    
    // consulta todos os produtos
    public async index(request: Request, response: Response): Promise<Response>{
        // cria objeto
        let listUsers = new ListUsersService()
        // chama o método para consultar todos os produtos
        let users = await listUsers.execute();

        return response.json(users)
    } 

}