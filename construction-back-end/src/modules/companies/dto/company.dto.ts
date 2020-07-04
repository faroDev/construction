import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ProjectDto } from '../../projects/dto/project.dto';

@ObjectType()
export class CompanyDto {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(type => [ProjectDto], { nullable: true })
  projects: ProjectDto[];
}
