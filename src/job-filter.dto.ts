/* eslint-disable prettier/prettier */
export class JobFiltersDto {
  searchQuery?: string;
  location?: string;
  jobType?: string;
  minSalary?: number; // Now it's a tuple
  maxSalary?: number; // Now it's a tuple
}