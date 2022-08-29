import { Brand } from './brand.interface';
import { Category } from './category.interface';
import { Document } from 'mongoose';

export interface Product extends Document {
  productName: string;
  description: string;
  price: number;
  created: Date;
  brand: Brand;
  category: Category;
}
