import { ObjectType, Field, ID } from '@nestjs/graphql';

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

  @Field()
  companyId: number;
}
