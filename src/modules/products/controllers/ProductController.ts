import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";

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
    
}