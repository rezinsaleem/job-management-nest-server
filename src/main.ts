/* eslint-disable @typescript-eslint/no-floating-promises *//* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
  origin: ['https://job-management-next-app.vercel.app/'], // update this
  credentials: true,
});
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();

