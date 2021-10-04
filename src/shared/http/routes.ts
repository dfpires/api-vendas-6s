import {Router} from 'express'

const routes = Router();

import productRouter from '../../modules/products/routes/product.routes'

routes.use('/products', productRouter)

// alterar o arquivo para incluir rota de cliente
export default routes