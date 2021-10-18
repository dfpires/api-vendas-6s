// responsável por gerar um token para o usuário

import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repository/UserRepository";
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

// vamos criar um tipo de dado de requisição
interface IRequest {
    email: string;
    password: string
}

// vamos criar um tipo de dado de resposta
interface IResponse {
    user: User;
    token: string
}

class CreateSessionService {

    public async execute( {email, password}: IRequest): Promise<IResponse> {
        // recupera o repositório de User
        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findByEmail(email)
        // verifica se o usuário existe
        if (!user) {
            throw new AppError('Email / Senha inválidos', 401);
        }
        // verifica se a senha confere
        const senhaConfirmada = await compare(password, user.password)
        if (!senhaConfirmada) {
            throw new AppError('Email / Senha inválidos', 401);
        }

        console.log('usuário pode receber o token')
        // vamos gerar o toke
        
        const token = sign({}, "dfgsdgdfsgdterwtbcvbgh", {
            subject: user.id,
            expiresIn: '1d'
        })
        // retorna resultado
        console.log('usuário pode receber o token')
        return {
            user, 
            token
        }
    }
}

export default CreateSessionService