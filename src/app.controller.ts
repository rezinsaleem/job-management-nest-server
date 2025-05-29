/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { CreateJobDto } from './create-job.dto';
import { Job } from './job.entity';
import { JobFiltersDto } from './job-filter.dto';

@Controller('jobs')
export class AppController {
  getAllJobs: any;
  constructor(private readonly appService: AppService) {}

  @Post()
  async createJob(
    @Body() createJobDto: CreateJobDto,
    @Res() res: Response
  ): Promise<void> {
    try {
      const result = await this.appService.createJob(createJobDto);
      res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Job Created Successfully',
        data: result,
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Job creation failed',
        data: null,
      });
    }
  }

  @Get()
  async getJobs(@Query() query: JobFiltersDto): Promise<Job[]> {
    const filters: JobFiltersDto = {
      searchQuery: query.searchQuery,
      location: query.location,
      jobType: query.jobType,
      minSalary: query.minSalary ? query.minSalary * 12000 : undefined,
      maxSalary: query.maxSalary ? query.maxSalary * 12000 : undefined,
    };
    console.log('Filters:', filters);
    return this.appService.getJobs(filters);
  }
}