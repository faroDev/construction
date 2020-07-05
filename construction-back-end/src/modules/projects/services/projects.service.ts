import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../entity/projects.entity';
import { Company } from '../../companies/entity/company.entity';
import { Repository } from 'typeorm';
import { ProjectInput } from '../inputs/projects.input';
import { ProjectDto } from '../dto/project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsReposritory: Repository<Project>,
    @InjectRepository(Company)
    private readonly companyReposritory: Repository<Company>,
  ) {}

  async findOneById(idProject: number): Promise<any> {
    return await this.projectsReposritory.findOne(idProject);
  }

  async getAll(): Promise<Project[] | void> {
    console.log(await this.projectsReposritory.find());
    return await this.projectsReposritory.find();
  }

  async findCompany(idCompany: number): Promise<Project[] | void> {
    return await this.projectsReposritory.find({
      where: {
        company: idCompany,
      },
    });
  }

  async create(inputProject: ProjectInput): Promise<ProjectDto | void> {
    try {
      const company = await this.companyReposritory.findOne(
        inputProject.companyId,
      );
      const newProject = await new Project();
      newProject.name = inputProject.name;
      newProject.address = inputProject.address;
      newProject.createAt = new Date();
      newProject.updateAt = new Date();
      newProject.company = company;
      return this.projectsReposritory.save(newProject);
    } catch (error) {
      throw new Error('No encontramos la compañia');
    }
  }
}
