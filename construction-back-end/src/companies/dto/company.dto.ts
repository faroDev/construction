import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class CompanyDto {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
