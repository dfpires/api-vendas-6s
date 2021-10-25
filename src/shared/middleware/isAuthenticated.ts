import AppError from "../../shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

// verifica se o usuário tem um token válido
export default function isAuthenticated(request: Request, response: Response, next: NextFunction): void {

    // recupera o cabeçalho da requisição contendo a autorização - token
    const authHeader = request.headers.authorization
    if (!authHeader){
        throw new AppError('Token JWT é inválido')
    }
    // Beared fkdsjfklsdjfkljsdklfjlksdjflksdjfkljsdlkfjsldkd
    const [, token] = authHeader.split(' ') // separa em dois pedaços, e somente o segundo nos interessa

    // verifica se o token é válido
    try {
            const tokenVerificado = verify(token, 'dfgsdgdfsgdterwtbcvbgh')

            return next() // pode acessar a API
    }
    catch {
        throw new AppError('Token JWT inválido')
    }
}