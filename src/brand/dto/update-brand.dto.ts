import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  brandName: string;
}
