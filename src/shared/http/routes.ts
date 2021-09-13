import {Router} from 'express'

const routes = Router();

import productRouter from '../../modules/products/routes/product.routes'

routes.use('/products', productRouter)

export default routes