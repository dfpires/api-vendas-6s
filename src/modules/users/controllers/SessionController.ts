import { Request, Response } from "express";
import CreateSessionService from "../services/CreateSessionService";

export default class SessionController {

    public async create(request: Request, response: Response): Promise<Response> {
        // email e senha vem pelo body
        const {email, password} = request.body;

        const createSessionService = new CreateSessionService()
        const user = createSessionService.execute({
            email, password
        })

        return response.json(user)
    }
}