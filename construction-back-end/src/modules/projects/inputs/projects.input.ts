import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProjectInput {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  createAt: Date;

  @Field({ nullable: true })
  updateAt: Date;

  @Field({ nullable: true })
  companyId: number;
}
