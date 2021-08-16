import {Router} from 'express'

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({
        message: "Funcionou até aqui, vamos adiante"
    })
});

export default routes