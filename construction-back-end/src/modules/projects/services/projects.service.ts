import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../entity/projects.entity';
import { Company } from '../../companies/entity/company.entity';
import { Repository } from 'typeorm';
import { ProjectInput } from '../inputs/projects.input';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectsReposritory: Repository<Project>,
  ) {}

  async findOneById(idProject: number): Promise<any> {
    return await this.projectsReposritory.findOne(idProject);
  }

  async findAll(): Promise<Project[]> {
    return await this.projectsReposritory.find();
  }

  async findCompany(idCompany: number): Promise<Project[] | void> {
    return await this.projectsReposritory.find({
      where: {
        company: idCompany,
      },
    });
  }
}
