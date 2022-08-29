import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createdocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('api', app, createdocument(app));
  // const globalPrefix = 'api/v1';
  // app.setGlobalPrefix(globalPrefix);
  await app.listen(3000);
}
bootstrap();
