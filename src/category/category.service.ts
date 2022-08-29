import { Category } from '../types/category.interface';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private CategoryModel: Model<Category>,
  ) {}

  async createCategory(category: CreateCategoryDto): Promise<Category> {
    return await this.CategoryModel.create(category);
  }

  async getAllCategories(): Promise<Category[]> {
    return await this.CategoryModel.find();
  }

  async getCategory(id: string): Promise<Category> {
    const category = await this.CategoryModel.findById(id);
    if (!category) {
      throw new HttpException('Category not found', HttpStatus.NO_CONTENT);
    }
    return category;
  }

  async updateCategory(
    id: string,
    newProduct: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this.CategoryModel.findByIdAndUpdate(
      id,
      newProduct,
      {
        new: true,
      },
    );
    if (!category) {
      throw new HttpException('Category not found', HttpStatus.NO_CONTENT);
    }
    return category;
  }

  async deleteCategory(id: string): Promise<string> {
    const category = await this.CategoryModel.findByIdAndDelete(id);
    if (!category) {
      throw new HttpException('Category not found', HttpStatus.NO_CONTENT);
    }
    return 'Category Deleted';
  }
}
