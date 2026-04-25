import { Transform } from 'class-transformer';
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateProductoDto {
    @IsString()
    public name: string;

    @IsString()
    @IsOptional()
    public description: string;

    @IsNumber()
    @Transform(({ value }) => parseFloat(value))
    public price: number;

    @IsDate()
    @Transform(({ value }) => new Date(value))
    public createdAt: Date;
}
