import { Transform } from 'class-transformer';
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateProductoDto {
    @IsString()
    public name!: string;

    @IsNumber()
    @Transform(({ value }) => parseFloat(value))
    public price!: number;

    @IsString()
    @IsOptional()
    public description?: string;
}
