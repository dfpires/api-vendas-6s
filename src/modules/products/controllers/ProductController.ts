import { request, Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";

export default class ProductController {

    // cria o produto
    public async create(request: Request, response: Response): Promise<Response> {
       let {name, price, quantity} = request.body;
        let createProduct = new CreateProductService()
        let product = createProduct.execute({
            name, price, quantity
        })
        return response.json(product);
    }

    // remove o produto
    public async delete(request: Request, response: Response): Promise <Response> {
        // recupera id do produto
        let {id} = request.params
        // cria um objeto
        let deleteProduct = new DeleteProductService()
        // efetivamente remove
        await deleteProduct.execute({id}); 

        return response.json([]);
    }
    
}