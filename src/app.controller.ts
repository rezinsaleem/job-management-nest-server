/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Controller('jobs')
export class AppController {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepo: Repository<Job>,
  ) {}

  @Post()
  async createJob(@Body() jobData: Partial<Job>): Promise<Job> {
    const job = this.jobRepo.create(jobData);
    return this.jobRepo.save(job);
  }

  @Get()
  async getAllJobs(): Promise<Job[]> {
    return this.jobRepo.find();
  }
}
