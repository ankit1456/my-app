import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post('/create')
  createBrand(@Body() Brand: CreateBrandDto) {
    return this.brandService.createBrand(Brand);
  }

  @Get()
  getAllCategories() {
    return this.brandService.getAllCategories();
  }

  @Get(':id')
  getBrand(@Param('id') id: string) {
    return this.brandService.getBrand(id);
  }

  @Patch(':id')
  updateBrand(@Param('id') id: string, @Body() newBrand: UpdateBrandDto) {
    return this.brandService.updateBrand(id, newBrand);
  }

  @Delete(':id')
  deleteBrand(@Param('id') id: string) {
    return this.brandService.deleteBrand(id);
  }
}
