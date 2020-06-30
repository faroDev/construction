import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CompanyInput {
  @Field()
  name: string;
}