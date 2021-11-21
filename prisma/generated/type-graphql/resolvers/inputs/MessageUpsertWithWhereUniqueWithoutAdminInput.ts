import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutAdminInput } from "../inputs/MessageCreateWithoutAdminInput";
import { MessageUpdateWithoutAdminInput } from "../inputs/MessageUpdateWithoutAdminInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpsertWithWhereUniqueWithoutAdminInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutAdminInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutAdminInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutAdminInput, {
    nullable: false
  })
  create!: MessageCreateWithoutAdminInput;
}
