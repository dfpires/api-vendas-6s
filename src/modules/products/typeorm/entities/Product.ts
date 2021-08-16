import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// trabalhamos com Decorators - @
@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @Column('int')
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


    constructor (id: string, name: string, price: number, quantity: number, created_at: Date, updated_at: Date) {
        this.id = id; this.name = name; this.price = price; this.quantity = quantity; 
        this.created_at = created_at; this.updated_at = updated_at;
    }
    
}

export default Product;