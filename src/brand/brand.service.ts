import { Brand } from './../types/brand.interface';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-Brand.dto';
import { UpdateBrandDto } from './dto/update-Brand.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BrandService {
  constructor(@InjectModel('Brand') private brandModel: Model<Brand>) {}

  async createBrand(brand: CreateBrandDto): Promise<Brand> {
    return await this.brandModel.create(brand);
  }

  async getAllCategories(): Promise<Brand[]> {
    return await this.brandModel.find();
  }

  async getBrand(id: string): Promise<Brand> {
    const Brand = await this.brandModel.findById(id);
    if (!Brand) {
      throw new HttpException('Brand not found', HttpStatus.NO_CONTENT);
    }
    return Brand;
  }

  async updateBrand(id: string, newBrand: UpdateBrandDto): Promise<Brand> {
    const Brand = await this.brandModel.findByIdAndUpdate(id, newBrand, {
      new: true,
    });
    if (!Brand) {
      throw new HttpException('Brand not found', HttpStatus.NO_CONTENT);
    }
    return Brand;
  }

  async deleteBrand(id: string): Promise<string> {
    const Brand = await this.brandModel.findByIdAndDelete(id);
    if (!Brand) {
      throw new HttpException('Brand not found', HttpStatus.NO_CONTENT);
    }
    return 'Brand Deleted';
  }
}
