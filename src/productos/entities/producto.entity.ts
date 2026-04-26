import { UpdateProductoDto } from '../dto/update-producto.dto';
interface UpdateProducto {
    name?: string;
    price?: number;
    description?: string;
}
export class Producto {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public createdAt: Date,
        public description?: string,
    ) { }

    update({ name, description, price }: UpdateProductoDto): void {
        this.name = name ?? this.name;
        this.description = description ?? this.description;
        this.price = price ?? this.price;
    }

}
