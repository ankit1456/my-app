import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import mongoose from 'mongoose';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('/create')
  createProduct(@Body() product: CreateProductDto) {
    return this.productsService.createProduct(product);
  }

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: mongoose.Types.ObjectId) {
    return this.productsService.getProduct(id);
  }
  @Get('brand/:brandId')
  getProductByBrand(@Param('brandId') id: mongoose.Types.ObjectId) {
    return this.productsService.getProductByBrand(id);
  }
  @Get('category/:categoryId')
  getProductByCategory(@Param('categoryId') id: mongoose.Types.ObjectId) {
    return this.productsService.getProductByCategory(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: mongoose.Types.ObjectId,
    @Body() product: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: mongoose.Types.ObjectId) {
    return this.productsService.deleteProduct(id);
  }
}
