/* eslint-disable @typescript-eslint/no-unsafe-call *//* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class CreateJobDto {
  @IsString()
  title: string;

  @IsString()
  company_name: string;

  @IsString()
  location: string;

  @IsString()
  job_type: string;

  @IsNumber()
  salary_range: number;

  @IsString()
  description: string;

  @IsString()
  application_deadline: string;
}



