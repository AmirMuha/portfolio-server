import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TechOrderByWithRelationInput } from "../../../inputs/TechOrderByWithRelationInput";
import { TechWhereInput } from "../../../inputs/TechWhereInput";
import { TechWhereUniqueInput } from "../../../inputs/TechWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTechArgs {
  @TypeGraphQL.Field(_type => TechWhereInput, {
    nullable: true
  })
  where?: TechWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TechOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TechOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TechWhereUniqueInput, {
    nullable: true
  })
  cursor?: TechWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
