import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { v4 as UuiV4 } from 'uuid';
@Injectable()
export class ProductosService {
  private products: Producto[] = [];
  create(createProductoDto: CreateProductoDto): Producto {
    const { name, description, price } = createProductoDto;
    const newProducto: Producto = new Producto(
      UuiV4(), // Genera un ID único usando UUID
      name,
      price,
      new Date(),
      description
    );
    this.products.push(newProducto);
    return newProducto;
  }

  findAll(): Producto[] {
    return this.products;
  }

  findOne(id: string): Producto {
    const product: Producto | undefined = this.products.find(producto => producto.id === id);
    if (!product) {
      throw new NotFoundException(`Producto with id ${id} not found`);
    }
    return product;
  }

  update(id: string, updateProductoDto: UpdateProductoDto): Producto {
    const { id: _, ...updateData } = updateProductoDto;
    const product: Producto = this.findOne(id);
    product.update(updateData);
    return product;
  }

  remove(id: string): Producto {
    const product: Producto | undefined = this.findOne(id);
    // if (!product) {
    //   throw new NotFoundException(`Producto with id ${id} not found`);
    // }
    this.products = this.products.filter(producto => producto.id !== id);
    return product;
  }
}
