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
      host: 'dpg-d0s2q995pdvs73954okg-a', 
      port: 5432,
      username: 'nest_pg_db_user',
      password: 'c6k6qAmedcI5A5WtbpfddMItMexP6qa8',
      database: 'nest_pg_db',
      entities: [Job],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Job])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
