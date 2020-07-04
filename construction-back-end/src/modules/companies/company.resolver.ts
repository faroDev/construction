import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CompanyService } from 'src/modules/companies/service/company.service';
import { CompanyDto } from 'src/modules/companies/dto/company.dto';
import { CompanyInput } from 'src/modules/companies/inputs/company.input';
import { ProjectsService } from '../projects/services/projects.service';
import { ProjectDto } from '../projects/dto/project.dto';

@Resolver(of => CompanyDto)
export class CompanyResolver {
  constructor(
    private readonly companyService: CompanyService,
  ) // private readonly projectsService: ProjectsService,
  {}

  @Query(() => [CompanyDto])
  async companies() {
    try {
      const result = await this.companyService.getAll();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  @Query(() => CompanyDto)
  async findCompanyById(@Args('id') id: number) {
    try {
      const result = await this.companyService.getById(id);

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // @ResolveField()
  // async company(@Parent() projects: ProjectDto[]) {
  //   return this.projectsService.findAll();
  // }

  @Mutation(() => CompanyDto)
  async createCompany(@Args('input') input: CompanyInput) {
    try {
      const result = await this.companyService.create(input);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => CompanyDto)
  async updateCompany(
    @Args('id') id: number,
    @Args('input') input: CompanyInput,
  ) {
    try {
      const result = await this.companyService.update(id, input);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  @Mutation(() => CompanyDto)
  async deleteCompany(@Args('id') id: number) {
    try {
      const resultToDelete = await this.companyService.getById(id);

      if (resultToDelete) {
        await this.companyService.delete(id);
        return resultToDelete;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
