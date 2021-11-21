import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SketchOrderByWithRelationInput } from "../../../inputs/SketchOrderByWithRelationInput";
import { SketchWhereInput } from "../../../inputs/SketchWhereInput";
import { SketchWhereUniqueInput } from "../../../inputs/SketchWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSketchArgs {
  @TypeGraphQL.Field(_type => SketchWhereInput, {
    nullable: true
  })
  where?: SketchWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SketchOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SketchOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SketchWhereUniqueInput, {
    nullable: true
  })
  cursor?: SketchWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
