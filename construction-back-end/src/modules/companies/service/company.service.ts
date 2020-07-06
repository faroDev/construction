import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from '../entity/company.entity';
import { Repository } from 'typeorm';
import { CompanyInput } from '../inputs/company.input';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async getAll(): Promise<Company[]> {
    return await this.companyRepository.find();
  }

  async getById(id: number): Promise<Company> {
    return await this.companyRepository.findOne(id);
  }

  async create(companyDto: CompanyInput): Promise<Company> {
    const newCategory = new Company();
    newCategory.name = companyDto.name;

    return await this.companyRepository.save(newCategory);
  }

  async update(id: number, companyDto: CompanyInput): Promise<Company> {
    const companyToUpdate = await this.companyRepository.findOne(id);
    companyToUpdate.name = companyDto.name;

    return await this.companyRepository.save(companyToUpdate);
  }

  async delete(id: number): Promise<any> {
    return await this.companyRepository.delete(id);
  }
}
