/* eslint-disable @typescript-eslint/no-unsafe-call *//* eslint-disable prettier/prettier */
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  company_name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  job_type: string;

  @IsNumber()
  @IsNotEmpty()
  salary_range: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  application_deadline: string;
}