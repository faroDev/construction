import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entity/projects.entity';

import { ProjectsService } from './services/projects.service';
import { ProjectsResolver } from './projects.resolver';

import { CompanyModule } from '../../modules/companies/company.module';

@Module({
  imports: [
    forwardRef(() => CompanyModule),
    TypeOrmModule.forFeature([Project]),
  ],
  providers: [ProjectsService, ProjectsResolver],
  exports: [ProjectsService],
})
export class ProjectsModule {}
