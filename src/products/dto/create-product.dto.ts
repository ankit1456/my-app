import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  productName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsDate()
  @IsNotEmpty()
  created: Date;

  @ApiProperty()
  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  category: string;

  @ApiProperty()
  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  brand: string;
}
