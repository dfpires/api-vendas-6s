
import {EntityRepository, Repository} from 'typeorm'
import Product from '../entities/Product'

@EntityRepository(Product) // decorando a classe 
export default class ProductRepository extends Repository<Product> {

    // exemplo de uma implementação particular, pois é resto já temos
    public async findByName(name: string): Promise<Product | undefined> {
        let product = this.findOne({ // procure o primeiro nome encontrado
            where: {
                name
            }
        })

        return product;
    }

}

