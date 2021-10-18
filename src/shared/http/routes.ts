import {Router} from 'express'

const routes = Router();

import productRouter from '../../modules/products/routes/product.routes'

routes.use('/products', productRouter)

import userRouter from '../../modules/users/routes/user.routes'

routes.use('/users', userRouter)

import sessionRouter from '../../modules/users/routes/session.routes'

routes.use('/session', sessionRouter)

// alterar o arquivo para incluir rota de cliente
export default routes