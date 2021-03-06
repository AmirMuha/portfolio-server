import {
  AboutRelationsResolver,
  CreateAboutResolver,
  CreateManyQuestionResolver,
  CreateManySketchResolver,
  CreateManyTechCategoryResolver,
  CreateManyTechResolver,
  CreateProjectResolver,
  CreateQuestionResolver,
  CreateSketchResolver,
  CreateStackResolver,
  CreateTechCategoryResolver,
  CreateTechResolver,
  DeleteAboutResolver,
  DeleteManyAboutResolver,
  DeleteManyMessageResolver,
  DeleteManyProjectResolver,
  DeleteManyQuestionResolver,
  DeleteManySketchResolver,
  DeleteManyTechCategoryResolver,
  DeleteManyTechResolver,
  DeleteMessageResolver,
  DeleteProjectResolver,
  DeleteQuestionResolver,
  DeleteSketchResolver,
  DeleteStackResolver,
  DeleteTechCategoryResolver,
  DeleteTechResolver,
  FindManyAboutResolver,
  FindManyMessageResolver,
  FindManyProjectResolver,
  FindManyQuestionResolver,
  FindManySketchResolver,
  FindManyStackResolver,
  FindManyTechCategoryResolver,
  FindManyTechResolver,
  FindUniqueAboutResolver,
  FindUniqueMessageResolver,
  FindUniqueProjectResolver,
  FindUniqueQuestionResolver,
  FindUniqueSketchResolver,
  FindUniqueTechCategoryResolver,
  FindUniqueTechResolver,
  MessageRelationsResolver,
  ProjectRelationsResolver,
  QuestionRelationsResolver,
  SketchRelationsResolver,
  TechCategoryRelationsResolver,
  TechRelationsResolver,
  UpdateAboutResolver,
  UpdateMessageResolver,
  UpdateProjectResolver,
  UpdateQuestionResolver,
  UpdateSketchResolver,
  UpdateStackResolver,
  UpdateTechCategoryResolver,
  UpdateTechResolver,
} from "../../prisma/generated/type-graphql";

import { AdminCrudResolver } from "../resolvers/User";
import { AnswerMessageResolver } from "../resolvers/AnswerMessage";
import { AuthResolver } from "../resolvers/Auth";
import { CreateProjectWithNestedRelationsResolver } from "./Project";
import { MessageResolver } from "../resolvers/Message";
import { MessageSubResolver } from "../resolvers/subscriptions/messageSubResolver";

export default [
  MessageResolver,
  AnswerMessageResolver,
  MessageSubResolver,
  CreateStackResolver,
  FindManyStackResolver,
  UpdateStackResolver,
  DeleteStackResolver,
  CreateProjectWithNestedRelationsResolver,
  TechCategoryRelationsResolver,
  AboutRelationsResolver,
  ProjectRelationsResolver,
  TechRelationsResolver,
  MessageRelationsResolver,
  SketchRelationsResolver,
  QuestionRelationsResolver,
  DeleteTechResolver,
  DeleteAboutResolver,
  CreateAboutResolver,
  DeleteProjectResolver,
  FindManyAboutResolver,
  DeleteQuestionResolver,
  UpdateAboutResolver,
  FindUniqueAboutResolver,
  DeleteTechCategoryResolver,
  DeleteManyAboutResolver,
  DeleteSketchResolver,
  CreateTechResolver,
  DeleteMessageResolver,
  CreateProjectResolver,
  CreateQuestionResolver,
  CreateTechCategoryResolver,
  CreateSketchResolver,
  FindManyTechResolver,
  FindManyProjectResolver,
  FindManyQuestionResolver,
  FindManyTechCategoryResolver,
  FindManySketchResolver,
  FindManyMessageResolver,
  UpdateTechResolver,
  UpdateProjectResolver,
  UpdateQuestionResolver,
  UpdateTechCategoryResolver,
  UpdateSketchResolver,
  UpdateMessageResolver,
  FindUniqueTechResolver,
  FindUniqueProjectResolver,
  FindUniqueQuestionResolver,
  FindUniqueTechCategoryResolver,
  FindUniqueSketchResolver,
  FindUniqueMessageResolver,
  DeleteManyTechResolver,
  DeleteManyProjectResolver,
  DeleteManyQuestionResolver,
  DeleteManyTechCategoryResolver,
  DeleteManySketchResolver,
  DeleteManyMessageResolver,
  AuthResolver,
  AdminCrudResolver,
  CreateManySketchResolver,
  CreateManyTechCategoryResolver,
  CreateManyQuestionResolver,
  CreateManyTechResolver,
] as any;
