import { Module } from '@nestjs/common';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from 'src/modules/companies/service/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/modules/companies/entity/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [CompanyResolver, CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
