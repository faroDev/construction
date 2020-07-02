import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompanyInput {
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
