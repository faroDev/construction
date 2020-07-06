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

  async findOneById(idProject: number): Promise<Project> {
    const e = await this.projectsReposritory.findOne(idProject);
    console.log(e.company);

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

  async update(
    projectId: number,
    inputProject: ProjectInput,
  ): Promise<ProjectDto | void> {
    try {
      const projectToUpdate = await this.projectsReposritory.findOne(projectId);
      console.log('Project to update', projectToUpdate);
      if (inputProject.name) {
        projectToUpdate.name = inputProject.name;
      }
      if (inputProject.address) {
        projectToUpdate.address = inputProject.address;
      }

      if (inputProject.companyId) {
        const company = await this.companyReposritory.findOne(
          inputProject.companyId,
        );
        projectToUpdate.company = company;
      }
      projectToUpdate.updateAt = new Date();
      console.log('Project already update', projectToUpdate);
      console.log(
        'result',
        await this.projectsReposritory.save(projectToUpdate),
      );
      return await this.projectsReposritory.save(projectToUpdate);
    } catch (error) {
      throw new Error('Error en el momento de editar');
    }
  }

  async delete(projectId: number): Promise<any> {
    return await this.projectsReposritory.delete(projectId);
  }
}
