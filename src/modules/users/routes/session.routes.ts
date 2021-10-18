import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import SessionController from "../controllers/SessionController";

// rota de sessão
const sessionRouter = Router()
// controller da sessão
const sessionController = new SessionController()

sessionRouter.post('/', 
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    }), 
    sessionController.create,
)

export default sessionRouter
