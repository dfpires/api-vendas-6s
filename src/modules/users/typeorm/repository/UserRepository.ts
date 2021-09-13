
import {EntityRepository, Repository} from 'typeorm'
import User from '../entities/User'

@EntityRepository(User) // decorando a classe 
export default class UserRepository extends Repository<User> {

    // exemplo de uma implementação particular, pois é resto já temos
    public async findByName(name: string): Promise<User | undefined> {
        let user = this.findOne({ // procure o primeiro nome encontrado
            where: {
                name
            }
        })

        return user;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        let user = this.findOne({ // procure o primeiro nome encontrado
            where: {
                email
            }
        })

        return user;
    }

    public async findById(id: string): Promise<User | undefined> {
        let user = this.findOne({ // procure o primeiro nome encontrado
            where: {
                id
            }
        })

        return user;
    }
}

