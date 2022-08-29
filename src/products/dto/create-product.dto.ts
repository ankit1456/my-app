import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsDate()
  @IsNotEmpty()
  created: Date;

  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  brand: string;
}
