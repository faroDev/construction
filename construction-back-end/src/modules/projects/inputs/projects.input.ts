import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProjectInput {
  @Field()
  name: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  createAt: Date;

  @Field({ nullable: true })
  updateAt: Date;

  @Field({ nullable: false })
  companyId: number;
}
