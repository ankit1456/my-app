import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Product } from '../types/product.interface';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async createProduct(newProduct: CreateProductDto): Promise<Product> {
    const product = await this.productModel.create(newProduct);
    return product;
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productModel
      .find()
      .populate({
        path: 'category',
        select: '-__v',
      })
      .populate({
        path: 'brand',
        select: '-__v',
      });
  }

  async getProduct(id: mongoose.Types.ObjectId): Promise<Product> {
    const product = await this.productModel
      .findById(id)
      .populate({
        path: 'category',
        select: '-__v',
      })
      .populate({
        path: 'brand',
        select: '-__v',
      });
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NO_CONTENT);
    }
    return product;
  }

  async getProductByCategory(
    categoryId: mongoose.Types.ObjectId,
  ): Promise<Product[]> {
    return await this.productModel
      .find({ category: categoryId })
      .populate({
        path: 'category',
        select: '-__v',
      })
      .populate({
        path: 'brand',
        select: '-__v',
      });
  }

  async getProductByBrand(
    brandId: mongoose.Types.ObjectId,
  ): Promise<Product[]> {
    return await this.productModel
      .find({ brand: brandId })
      .populate({
        path: 'category',
        select: '-__v',
      })
      .populate({
        path: 'brand',
        select: '-__v',
      });
  }

  async updateProduct(
    id: mongoose.Types.ObjectId,
    product: UpdateProductDto,
  ): Promise<Product> {
    const newProduct = await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
    });
    if (!newProduct) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return (
      await newProduct.populate({
        path: 'category',
        select: '-__v',
      })
    ).populate({
      path: 'brand',
      select: '-__v',
    });
  }

  async deleteProduct(id: mongoose.Types.ObjectId): Promise<string> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return 'Product Deleted';
  }
}
