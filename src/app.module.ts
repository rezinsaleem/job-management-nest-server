/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './job.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432,
      username: 'postgres',
      password: 'sql',
      database: 'job-management',
      entities: [Job],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Job])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
