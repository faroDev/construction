import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { ProjectsService } from './services/projects.service';
import { CompanyService } from '../companies/service/company.service';

import { ProjectInput } from '../projects/inputs/projects.input';
import { ProjectDto } from './dto/project.dto';
import { CompanyDto } from '../companies/dto/company.dto';
import { idText } from 'typescript';

@Resolver(of => ProjectDto) // ???
export class ProjectsResolver {
  constructor(
    private projectsService: ProjectsService,
    private companyService: CompanyService,
  ) {}
  @Query(returns => [ProjectDto])
  async projects() {
    return this.projectsService.getAll();
  }
  @Query(returns => ProjectDto)
  async projectById(@Args('id') id: number) {
    console.log('findbyid', await this.projectsService.findOneById(id));
    return this.projectsService.findOneById(id);
  }

  @ResolveField()
  async company(@Parent() company: CompanyDto) {
    const { id } = company;
    return this.companyService.getById(id);
  }
  @Mutation(() => ProjectDto)
  async createProject(@Args('input') input: ProjectInput) {
    try {
      const result = await this.projectsService.create(input);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => ProjectDto)
  async updateProject(
    @Args('id') id: number,
    @Args('input') input: ProjectInput,
  ) {
    try {
      const result = await this.projectsService.update(id, input);
      console.log('resolve result', result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => ProjectDto)
  async deleteProject(@Args('id') id: number) {
    try {
      const resultToDelete = await this.projectsService.findOneById(id);

      if (resultToDelete) {
        await this.projectsService.delete(id);
        return resultToDelete;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
