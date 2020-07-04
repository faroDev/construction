import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CompanyDto } from 'src/modules/companies/dto/company.dto';

@ObjectType()
export class ProjectDto {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  createAt: string;

  @Field()
  update: string;

  @Field(type => CompanyDto, { nullable: true })
  company: CompanyDto;
}
