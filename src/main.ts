/* eslint-disable @typescript-eslint/no-floating-promises *//* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
  origin: ['https://job-management-next-app.vercel.app/'], 
  methods: 'GET,HEAD,PUT,POST,PATCH,DELETE',// update this
  credentials: true,
});
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(5000);
}
bootstrap();

