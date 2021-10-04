
import { celebrate, Segments, Joi } from 'celebrate';
import {Router} from 'express';


import UserController from '../controllers/UserController';

let userRouter = Router()

let userController = new UserController()

// não temos nada para validar
userRouter.get('/', userController.index)
// validar que o post precisa de um produto
userRouter.post('/', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required()
        }
    }),
userController.create)

export default userRouter