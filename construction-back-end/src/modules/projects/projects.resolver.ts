import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ProjectsService } from './services/projects.service';
import { CompanyService } from '../companies/service/company.service';

import { ProjectDto } from './dto/project.dto';
import { CompanyDto } from '../companies/dto/company.dto';
import { Inject, forwardRef } from '@nestjs/common';

@Resolver(of => ProjectDto) // ???
export class ProjectsResolver {
  constructor(
    private projectsService: ProjectsService,
    // @Inject(forwardRef(() => CompanyService))
    private companyService: CompanyService,
  ) {}
  @Query(returns => ProjectDto)
  async projects() {
    return this.projectsService.findAll();
  }
  @Query(returns => ProjectDto)
  async projectById(@Args('id') id: number) {
    return this.projectsService.findOneById(id);
  }

  @ResolveField()
  async company(@Parent() company: CompanyDto) {
    const { id } = company;
    return this.companyService.getById(id);
  }
}
