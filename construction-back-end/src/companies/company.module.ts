import { Module } from '@nestjs/common';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from 'src/companies/service/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/companies/entity/company.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Company])],
  providers: [CompanyResolver, CompanyService],
})
export class CompanyModule {}
