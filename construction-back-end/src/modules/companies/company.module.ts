import { Module, forwardRef } from '@nestjs/common';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from 'src/modules/companies/service/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectsModule } from '../projects/projects.module';
import { ProjectsResolver } from '../projects/projects.resolver';

import { Company } from 'src/modules/companies/entity/company.entity';

@Module({
  imports: [
    forwardRef(() => ProjectsModule),
    TypeOrmModule.forFeature([Company]),
  ],
  providers: [CompanyResolver, CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
