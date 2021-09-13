
import { celebrate, Segments, Joi } from 'celebrate';
import {Router} from 'express';


import ProductController from '../controllers/ProductController';

let productRouter = Router()

let productController = new ProductController()

// não temos nada para validar
productRouter.get('/', productController.index)
productRouter.get('/:id', productController.show)
// validar que o post precisa de um produto
productRouter.post('/', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            price: Joi.number().precision(2).required(),
            quantity: Joi.number().required()
        }
    }),
productController.create)
productRouter.put('/:id', productController.update)
productRouter.delete('/:id', productController.delete)

export default productRouter