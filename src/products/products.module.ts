import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../schema/product.schema';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
