import { request, Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductsService from "../services/ListProductsService";
import ShowProductService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";

export default class ProductController {

    // cria o produto
    public async create(request: Request, response: Response): Promise<Response> {
       let {name, price, quantity} = request.body;
        let createProduct = new CreateProductService()
        let product = await createProduct.execute({
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
    
    // consulta todos os produtos
    public async index(request: Request, response: Response): Promise<Response>{
        // cria objeto
        let listProducts = new ListProductsService()
        // chama o método para consultar todos os produtos
        let products= await listProducts.execute();

        return response.json(products)
    } 

    // consulta um produto
    public async show(request: Request, response: Response): Promise<Response>{
        let {id} = request.params
        let showProduct = new ShowProductService()
        let product = await showProduct.execute({id});
        return response.json(product);
    }

    // atualiza o produto
    public async update(request: Request, response: Response): Promise<Response> {
        let {id} = request.params
        let {name, price, quantity} = request.body

        let updateProduct = new UpdateProductService();

        let product = await updateProduct.execute({id, name, price, quantity});
        
        return response.json(product)
    }
}