import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import 'dotenv/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    CategoryModule,
    BrandModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
