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

  @Field({ nullable: true })
  createAt: Date;

  @Field({ nullable: true })
  updateAt: Date;

  @Field(type => CompanyDto, { nullable: false })
  company: CompanyDto;
}
