import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SketchWhereUniqueInput } from "../../../inputs/SketchWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSketchArgs {
  @TypeGraphQL.Field(_type => SketchWhereUniqueInput, {
    nullable: false
  })
  where!: SketchWhereUniqueInput;
}
