"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const crudResolversMap = {
    Admin: crudResolvers.AdminCrudResolver,
    Stack: crudResolvers.StackCrudResolver,
    Project: crudResolvers.ProjectCrudResolver,
    TechCategory: crudResolvers.TechCategoryCrudResolver,
    Tech: crudResolvers.TechCrudResolver,
    Question: crudResolvers.QuestionCrudResolver,
    Sketch: crudResolvers.SketchCrudResolver,
    About: crudResolvers.AboutCrudResolver,
    Message: crudResolvers.MessageCrudResolver
};
const relationResolversMap = {
    Admin: relationResolvers.AdminRelationsResolver,
    Stack: relationResolvers.StackRelationsResolver,
    Project: relationResolvers.ProjectRelationsResolver,
    TechCategory: relationResolvers.TechCategoryRelationsResolver,
    Tech: relationResolvers.TechRelationsResolver,
    Question: relationResolvers.QuestionRelationsResolver,
    Sketch: relationResolvers.SketchRelationsResolver,
    About: relationResolvers.AboutRelationsResolver,
    Message: relationResolvers.MessageRelationsResolver
};
const actionResolversMap = {
    Admin: {
        admin: actionResolvers.FindUniqueAdminResolver,
        findFirstAdmin: actionResolvers.FindFirstAdminResolver,
        admins: actionResolvers.FindManyAdminResolver,
        createAdmin: actionResolvers.CreateAdminResolver,
        createManyAdmin: actionResolvers.CreateManyAdminResolver,
        deleteAdmin: actionResolvers.DeleteAdminResolver,
        updateAdmin: actionResolvers.UpdateAdminResolver,
        deleteManyAdmin: actionResolvers.DeleteManyAdminResolver,
        updateManyAdmin: actionResolvers.UpdateManyAdminResolver,
        upsertAdmin: actionResolvers.UpsertAdminResolver,
        aggregateAdmin: actionResolvers.AggregateAdminResolver,
        groupByAdmin: actionResolvers.GroupByAdminResolver
    },
    Stack: {
        stack: actionResolvers.FindUniqueStackResolver,
        findFirstStack: actionResolvers.FindFirstStackResolver,
        stacks: actionResolvers.FindManyStackResolver,
        createStack: actionResolvers.CreateStackResolver,
        createManyStack: actionResolvers.CreateManyStackResolver,
        deleteStack: actionResolvers.DeleteStackResolver,
        updateStack: actionResolvers.UpdateStackResolver,
        deleteManyStack: actionResolvers.DeleteManyStackResolver,
        updateManyStack: actionResolvers.UpdateManyStackResolver,
        upsertStack: actionResolvers.UpsertStackResolver,
        aggregateStack: actionResolvers.AggregateStackResolver,
        groupByStack: actionResolvers.GroupByStackResolver
    },
    Project: {
        project: actionResolvers.FindUniqueProjectResolver,
        findFirstProject: actionResolvers.FindFirstProjectResolver,
        projects: actionResolvers.FindManyProjectResolver,
        createProject: actionResolvers.CreateProjectResolver,
        createManyProject: actionResolvers.CreateManyProjectResolver,
        deleteProject: actionResolvers.DeleteProjectResolver,
        updateProject: actionResolvers.UpdateProjectResolver,
        deleteManyProject: actionResolvers.DeleteManyProjectResolver,
        updateManyProject: actionResolvers.UpdateManyProjectResolver,
        upsertProject: actionResolvers.UpsertProjectResolver,
        aggregateProject: actionResolvers.AggregateProjectResolver,
        groupByProject: actionResolvers.GroupByProjectResolver
    },
    TechCategory: {
        techCategory: actionResolvers.FindUniqueTechCategoryResolver,
        findFirstTechCategory: actionResolvers.FindFirstTechCategoryResolver,
        techCategories: actionResolvers.FindManyTechCategoryResolver,
        createTechCategory: actionResolvers.CreateTechCategoryResolver,
        createManyTechCategory: actionResolvers.CreateManyTechCategoryResolver,
        deleteTechCategory: actionResolvers.DeleteTechCategoryResolver,
        updateTechCategory: actionResolvers.UpdateTechCategoryResolver,
        deleteManyTechCategory: actionResolvers.DeleteManyTechCategoryResolver,
        updateManyTechCategory: actionResolvers.UpdateManyTechCategoryResolver,
        upsertTechCategory: actionResolvers.UpsertTechCategoryResolver,
        aggregateTechCategory: actionResolvers.AggregateTechCategoryResolver,
        groupByTechCategory: actionResolvers.GroupByTechCategoryResolver
    },
    Tech: {
        tech: actionResolvers.FindUniqueTechResolver,
        findFirstTech: actionResolvers.FindFirstTechResolver,
        teches: actionResolvers.FindManyTechResolver,
        createTech: actionResolvers.CreateTechResolver,
        createManyTech: actionResolvers.CreateManyTechResolver,
        deleteTech: actionResolvers.DeleteTechResolver,
        updateTech: actionResolvers.UpdateTechResolver,
        deleteManyTech: actionResolvers.DeleteManyTechResolver,
        updateManyTech: actionResolvers.UpdateManyTechResolver,
        upsertTech: actionResolvers.UpsertTechResolver,
        aggregateTech: actionResolvers.AggregateTechResolver,
        groupByTech: actionResolvers.GroupByTechResolver
    },
    Question: {
        question: actionResolvers.FindUniqueQuestionResolver,
        findFirstQuestion: actionResolvers.FindFirstQuestionResolver,
        questions: actionResolvers.FindManyQuestionResolver,
        createQuestion: actionResolvers.CreateQuestionResolver,
        createManyQuestion: actionResolvers.CreateManyQuestionResolver,
        deleteQuestion: actionResolvers.DeleteQuestionResolver,
        updateQuestion: actionResolvers.UpdateQuestionResolver,
        deleteManyQuestion: actionResolvers.DeleteManyQuestionResolver,
        updateManyQuestion: actionResolvers.UpdateManyQuestionResolver,
        upsertQuestion: actionResolvers.UpsertQuestionResolver,
        aggregateQuestion: actionResolvers.AggregateQuestionResolver,
        groupByQuestion: actionResolvers.GroupByQuestionResolver
    },
    Sketch: {
        sketch: actionResolvers.FindUniqueSketchResolver,
        findFirstSketch: actionResolvers.FindFirstSketchResolver,
        sketches: actionResolvers.FindManySketchResolver,
        createSketch: actionResolvers.CreateSketchResolver,
        createManySketch: actionResolvers.CreateManySketchResolver,
        deleteSketch: actionResolvers.DeleteSketchResolver,
        updateSketch: actionResolvers.UpdateSketchResolver,
        deleteManySketch: actionResolvers.DeleteManySketchResolver,
        updateManySketch: actionResolvers.UpdateManySketchResolver,
        upsertSketch: actionResolvers.UpsertSketchResolver,
        aggregateSketch: actionResolvers.AggregateSketchResolver,
        groupBySketch: actionResolvers.GroupBySketchResolver
    },
    About: {
        about: actionResolvers.FindUniqueAboutResolver,
        findFirstAbout: actionResolvers.FindFirstAboutResolver,
        abouts: actionResolvers.FindManyAboutResolver,
        createAbout: actionResolvers.CreateAboutResolver,
        createManyAbout: actionResolvers.CreateManyAboutResolver,
        deleteAbout: actionResolvers.DeleteAboutResolver,
        updateAbout: actionResolvers.UpdateAboutResolver,
        deleteManyAbout: actionResolvers.DeleteManyAboutResolver,
        updateManyAbout: actionResolvers.UpdateManyAboutResolver,
        upsertAbout: actionResolvers.UpsertAboutResolver,
        aggregateAbout: actionResolvers.AggregateAboutResolver,
        groupByAbout: actionResolvers.GroupByAboutResolver
    },
    Message: {
        message: actionResolvers.FindUniqueMessageResolver,
        findFirstMessage: actionResolvers.FindFirstMessageResolver,
        messages: actionResolvers.FindManyMessageResolver,
        createMessage: actionResolvers.CreateMessageResolver,
        createManyMessage: actionResolvers.CreateManyMessageResolver,
        deleteMessage: actionResolvers.DeleteMessageResolver,
        updateMessage: actionResolvers.UpdateMessageResolver,
        deleteManyMessage: actionResolvers.DeleteManyMessageResolver,
        updateManyMessage: actionResolvers.UpdateManyMessageResolver,
        upsertMessage: actionResolvers.UpsertMessageResolver,
        aggregateMessage: actionResolvers.AggregateMessageResolver,
        groupByMessage: actionResolvers.GroupByMessageResolver
    }
};
const resolversInfo = {
    Admin: ["admin", "findFirstAdmin", "admins", "createAdmin", "createManyAdmin", "deleteAdmin", "updateAdmin", "deleteManyAdmin", "updateManyAdmin", "upsertAdmin", "aggregateAdmin", "groupByAdmin"],
    Stack: ["stack", "findFirstStack", "stacks", "createStack", "createManyStack", "deleteStack", "updateStack", "deleteManyStack", "updateManyStack", "upsertStack", "aggregateStack", "groupByStack"],
    Project: ["project", "findFirstProject", "projects", "createProject", "createManyProject", "deleteProject", "updateProject", "deleteManyProject", "updateManyProject", "upsertProject", "aggregateProject", "groupByProject"],
    TechCategory: ["techCategory", "findFirstTechCategory", "techCategories", "createTechCategory", "createManyTechCategory", "deleteTechCategory", "updateTechCategory", "deleteManyTechCategory", "updateManyTechCategory", "upsertTechCategory", "aggregateTechCategory", "groupByTechCategory"],
    Tech: ["tech", "findFirstTech", "teches", "createTech", "createManyTech", "deleteTech", "updateTech", "deleteManyTech", "updateManyTech", "upsertTech", "aggregateTech", "groupByTech"],
    Question: ["question", "findFirstQuestion", "questions", "createQuestion", "createManyQuestion", "deleteQuestion", "updateQuestion", "deleteManyQuestion", "updateManyQuestion", "upsertQuestion", "aggregateQuestion", "groupByQuestion"],
    Sketch: ["sketch", "findFirstSketch", "sketches", "createSketch", "createManySketch", "deleteSketch", "updateSketch", "deleteManySketch", "updateManySketch", "upsertSketch", "aggregateSketch", "groupBySketch"],
    About: ["about", "findFirstAbout", "abouts", "createAbout", "createManyAbout", "deleteAbout", "updateAbout", "deleteManyAbout", "updateManyAbout", "upsertAbout", "aggregateAbout", "groupByAbout"],
    Message: ["message", "findFirstMessage", "messages", "createMessage", "createManyMessage", "deleteMessage", "updateMessage", "deleteManyMessage", "updateManyMessage", "upsertMessage", "aggregateMessage", "groupByMessage"]
};
const relationResolversInfo = {
    Admin: ["about", "messages", "projects", "stack"],
    Stack: ["admin"],
    Project: ["tech_categories", "questions", "sketches", "admin"],
    TechCategory: ["techs", "project"],
    Tech: ["tech_categories"],
    Question: ["project"],
    Sketch: ["project"],
    About: ["admin"],
    Message: ["admin"]
};
const modelsInfo = {
    Admin: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "resumes", "confirmed", "createdAt", "updatedAt"],
    Stack: ["id", "title", "image", "admin_id"],
    Project: ["id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt"],
    TechCategory: ["id", "name", "project_id"],
    Tech: ["id", "name", "tech_category_id"],
    Question: ["id", "question", "answer", "project_id"],
    Sketch: ["id", "title", "description", "summary", "downloadables", "image", "project_id"],
    About: ["id", "title", "body", "admin_id", "updatedAt"],
    Message: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd"]
};
const inputsInfo = {
    AdminWhereInput: ["AND", "OR", "NOT", "id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "resumes", "confirmed", "about", "messages", "projects", "stack", "apikey", "password", "createdAt", "updatedAt"],
    AdminOrderByWithRelationInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "resumes", "confirmed", "about", "messages", "projects", "stack", "apikey", "password", "createdAt", "updatedAt"],
    AdminWhereUniqueInput: ["id", "email"],
    AdminOrderByWithAggregationInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "resumes", "confirmed", "apikey", "password", "createdAt", "updatedAt", "_count", "_max", "_min"],
    AdminScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "resumes", "confirmed", "apikey", "password", "createdAt", "updatedAt"],
    StackWhereInput: ["AND", "OR", "NOT", "id", "title", "image", "admin", "admin_id"],
    StackOrderByWithRelationInput: ["id", "title", "image", "admin", "admin_id"],
    StackWhereUniqueInput: ["id"],
    StackOrderByWithAggregationInput: ["id", "title", "image", "admin_id", "_count", "_max", "_min"],
    StackScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "image", "admin_id"],
    ProjectWhereInput: ["AND", "OR", "NOT", "id", "name", "image", "type", "github_url", "app_url", "summary", "tech_categories", "questions", "sketches", "admin", "admin_id", "createdAt", "updatedAt"],
    ProjectOrderByWithRelationInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "tech_categories", "questions", "sketches", "admin", "admin_id", "createdAt", "updatedAt"],
    ProjectWhereUniqueInput: ["id"],
    ProjectOrderByWithAggregationInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt", "_count", "_max", "_min"],
    ProjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt"],
    TechCategoryWhereInput: ["AND", "OR", "NOT", "id", "name", "techs", "project", "project_id"],
    TechCategoryOrderByWithRelationInput: ["id", "name", "techs", "project", "project_id"],
    TechCategoryWhereUniqueInput: ["id"],
    TechCategoryOrderByWithAggregationInput: ["id", "name", "project_id", "_count", "_max", "_min"],
    TechCategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "project_id"],
    TechWhereInput: ["AND", "OR", "NOT", "id", "name", "tech_categories", "tech_category_id"],
    TechOrderByWithRelationInput: ["id", "name", "tech_categories", "tech_category_id"],
    TechWhereUniqueInput: ["id"],
    TechOrderByWithAggregationInput: ["id", "name", "tech_category_id", "_count", "_max", "_min"],
    TechScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "tech_category_id"],
    QuestionWhereInput: ["AND", "OR", "NOT", "id", "question", "answer", "project", "project_id"],
    QuestionOrderByWithRelationInput: ["id", "question", "answer", "project", "project_id"],
    QuestionWhereUniqueInput: ["id"],
    QuestionOrderByWithAggregationInput: ["id", "question", "answer", "project_id", "_count", "_max", "_min"],
    QuestionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "question", "answer", "project_id"],
    SketchWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "summary", "downloadables", "image", "project", "project_id"],
    SketchOrderByWithRelationInput: ["id", "title", "description", "summary", "downloadables", "image", "project", "project_id"],
    SketchWhereUniqueInput: ["id"],
    SketchOrderByWithAggregationInput: ["id", "title", "description", "summary", "downloadables", "image", "project_id", "_count", "_max", "_min"],
    SketchScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "summary", "downloadables", "image", "project_id"],
    AboutWhereInput: ["AND", "OR", "NOT", "id", "title", "body", "admin", "admin_id", "updatedAt"],
    AboutOrderByWithRelationInput: ["id", "title", "body", "admin", "admin_id", "updatedAt"],
    AboutWhereUniqueInput: ["id"],
    AboutOrderByWithAggregationInput: ["id", "title", "body", "admin_id", "updatedAt", "_count", "_max", "_min"],
    AboutScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "body", "admin_id", "updatedAt"],
    MessageWhereInput: ["AND", "OR", "NOT", "id", "subject", "from", "files", "body", "read_status", "answer_status", "admin", "admin_id", "answeredAt", "createdAd"],
    MessageOrderByWithRelationInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "admin", "admin_id", "answeredAt", "createdAd"],
    MessageWhereUniqueInput: ["id"],
    MessageOrderByWithAggregationInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd", "_count", "_max", "_min"],
    MessageScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd"],
    AdminCreateInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes", "about", "messages", "projects", "stack"],
    AdminUpdateInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes", "about", "messages", "projects", "stack"],
    AdminCreateManyInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes"],
    AdminUpdateManyMutationInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes"],
    StackCreateInput: ["id", "title", "image", "admin"],
    StackUpdateInput: ["id", "title", "image", "admin"],
    StackCreateManyInput: ["id", "title", "image", "admin_id"],
    StackUpdateManyMutationInput: ["id", "title", "image"],
    ProjectCreateInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt", "tech_categories", "questions", "sketches", "admin"],
    ProjectUpdateInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt", "tech_categories", "questions", "sketches", "admin"],
    ProjectCreateManyInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt"],
    ProjectUpdateManyMutationInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt"],
    TechCategoryCreateInput: ["id", "name", "techs", "project"],
    TechCategoryUpdateInput: ["id", "name", "techs", "project"],
    TechCategoryCreateManyInput: ["id", "name", "project_id"],
    TechCategoryUpdateManyMutationInput: ["id", "name"],
    TechCreateInput: ["id", "name", "tech_categories"],
    TechUpdateInput: ["id", "name", "tech_categories"],
    TechCreateManyInput: ["id", "name", "tech_category_id"],
    TechUpdateManyMutationInput: ["id", "name"],
    QuestionCreateInput: ["id", "question", "answer", "project"],
    QuestionUpdateInput: ["id", "question", "answer", "project"],
    QuestionCreateManyInput: ["id", "question", "answer", "project_id"],
    QuestionUpdateManyMutationInput: ["id", "question", "answer"],
    SketchCreateInput: ["id", "title", "description", "summary", "downloadables", "image", "project"],
    SketchUpdateInput: ["id", "title", "description", "summary", "downloadables", "image", "project"],
    SketchCreateManyInput: ["id", "title", "description", "summary", "downloadables", "image", "project_id"],
    SketchUpdateManyMutationInput: ["id", "title", "description", "summary", "downloadables", "image"],
    AboutCreateInput: ["id", "title", "body", "updatedAt", "admin"],
    AboutUpdateInput: ["id", "title", "body", "updatedAt", "admin"],
    AboutCreateManyInput: ["id", "title", "body", "admin_id", "updatedAt"],
    AboutUpdateManyMutationInput: ["id", "title", "body", "updatedAt"],
    MessageCreateInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "answeredAt", "createdAd", "admin"],
    MessageUpdateInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "answeredAt", "createdAd", "admin"],
    MessageCreateManyInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd"],
    MessageUpdateManyMutationInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "answeredAt", "createdAd"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
    BoolFilter: ["equals", "not"],
    AboutListRelationFilter: ["every", "some", "none"],
    MessageListRelationFilter: ["every", "some", "none"],
    ProjectListRelationFilter: ["every", "some", "none"],
    StackListRelationFilter: ["every", "some", "none"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AboutOrderByRelationAggregateInput: ["_count"],
    MessageOrderByRelationAggregateInput: ["_count"],
    ProjectOrderByRelationAggregateInput: ["_count"],
    StackOrderByRelationAggregateInput: ["_count"],
    AdminCountOrderByAggregateInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "resumes", "confirmed", "apikey", "password", "createdAt", "updatedAt"],
    AdminMaxOrderByAggregateInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt"],
    AdminMinOrderByAggregateInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    AdminRelationFilter: ["is", "isNot"],
    StackCountOrderByAggregateInput: ["id", "title", "image", "admin_id"],
    StackMaxOrderByAggregateInput: ["id", "title", "image", "admin_id"],
    StackMinOrderByAggregateInput: ["id", "title", "image", "admin_id"],
    TechCategoryListRelationFilter: ["every", "some", "none"],
    QuestionListRelationFilter: ["every", "some", "none"],
    SketchListRelationFilter: ["every", "some", "none"],
    TechCategoryOrderByRelationAggregateInput: ["_count"],
    QuestionOrderByRelationAggregateInput: ["_count"],
    SketchOrderByRelationAggregateInput: ["_count"],
    ProjectCountOrderByAggregateInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt"],
    ProjectMaxOrderByAggregateInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt"],
    ProjectMinOrderByAggregateInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt"],
    TechListRelationFilter: ["every", "some", "none"],
    ProjectRelationFilter: ["is", "isNot"],
    TechOrderByRelationAggregateInput: ["_count"],
    TechCategoryCountOrderByAggregateInput: ["id", "name", "project_id"],
    TechCategoryMaxOrderByAggregateInput: ["id", "name", "project_id"],
    TechCategoryMinOrderByAggregateInput: ["id", "name", "project_id"],
    TechCategoryRelationFilter: ["is", "isNot"],
    TechCountOrderByAggregateInput: ["id", "name", "tech_category_id"],
    TechMaxOrderByAggregateInput: ["id", "name", "tech_category_id"],
    TechMinOrderByAggregateInput: ["id", "name", "tech_category_id"],
    QuestionCountOrderByAggregateInput: ["id", "question", "answer", "project_id"],
    QuestionMaxOrderByAggregateInput: ["id", "question", "answer", "project_id"],
    QuestionMinOrderByAggregateInput: ["id", "question", "answer", "project_id"],
    SketchCountOrderByAggregateInput: ["id", "title", "description", "summary", "downloadables", "image", "project_id"],
    SketchMaxOrderByAggregateInput: ["id", "title", "description", "summary", "downloadables", "image", "project_id"],
    SketchMinOrderByAggregateInput: ["id", "title", "description", "summary", "downloadables", "image", "project_id"],
    AboutCountOrderByAggregateInput: ["id", "title", "body", "admin_id", "updatedAt"],
    AboutMaxOrderByAggregateInput: ["id", "title", "body", "admin_id", "updatedAt"],
    AboutMinOrderByAggregateInput: ["id", "title", "body", "admin_id", "updatedAt"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    MessageCountOrderByAggregateInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd"],
    MessageMaxOrderByAggregateInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd"],
    MessageMinOrderByAggregateInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    AdminCreateresumesInput: ["set"],
    AboutCreateNestedManyWithoutAdminInput: ["create", "connectOrCreate", "createMany", "connect"],
    MessageCreateNestedManyWithoutAdminInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProjectCreateNestedManyWithoutAdminInput: ["create", "connectOrCreate", "createMany", "connect"],
    StackCreateNestedManyWithoutAdminInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    AdminUpdateresumesInput: ["set", "push"],
    AboutUpdateManyWithoutAdminInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    MessageUpdateManyWithoutAdminInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ProjectUpdateManyWithoutAdminInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    StackUpdateManyWithoutAdminInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    AdminCreateManyresumesInput: ["set"],
    AdminCreateNestedOneWithoutStackInput: ["create", "connectOrCreate", "connect"],
    AdminUpdateOneRequiredWithoutStackInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    TechCategoryCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
    QuestionCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
    SketchCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
    AdminCreateNestedOneWithoutProjectsInput: ["create", "connectOrCreate", "connect"],
    TechCategoryUpdateManyWithoutProjectInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    QuestionUpdateManyWithoutProjectInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    SketchUpdateManyWithoutProjectInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    AdminUpdateOneRequiredWithoutProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    TechCreateNestedManyWithoutTech_categoriesInput: ["create", "connectOrCreate", "createMany", "connect"],
    ProjectCreateNestedOneWithoutTech_categoriesInput: ["create", "connectOrCreate", "connect"],
    TechUpdateManyWithoutTech_categoriesInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ProjectUpdateOneRequiredWithoutTech_categoriesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    TechCategoryCreateNestedOneWithoutTechsInput: ["create", "connectOrCreate", "connect"],
    TechCategoryUpdateOneRequiredWithoutTechsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProjectCreateNestedOneWithoutQuestionsInput: ["create", "connectOrCreate", "connect"],
    ProjectUpdateOneRequiredWithoutQuestionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProjectCreateNestedOneWithoutSketchesInput: ["create", "connectOrCreate", "connect"],
    ProjectUpdateOneRequiredWithoutSketchesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AdminCreateNestedOneWithoutAboutInput: ["create", "connectOrCreate", "connect"],
    AdminUpdateOneRequiredWithoutAboutInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AdminCreateNestedOneWithoutMessagesInput: ["create", "connectOrCreate", "connect"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    AdminUpdateOneRequiredWithoutMessagesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    AboutCreateWithoutAdminInput: ["id", "title", "body", "updatedAt"],
    AboutCreateOrConnectWithoutAdminInput: ["where", "create"],
    AboutCreateManyAdminInputEnvelope: ["data", "skipDuplicates"],
    MessageCreateWithoutAdminInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "answeredAt", "createdAd"],
    MessageCreateOrConnectWithoutAdminInput: ["where", "create"],
    MessageCreateManyAdminInputEnvelope: ["data", "skipDuplicates"],
    ProjectCreateWithoutAdminInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt", "tech_categories", "questions", "sketches"],
    ProjectCreateOrConnectWithoutAdminInput: ["where", "create"],
    ProjectCreateManyAdminInputEnvelope: ["data", "skipDuplicates"],
    StackCreateWithoutAdminInput: ["id", "title", "image"],
    StackCreateOrConnectWithoutAdminInput: ["where", "create"],
    StackCreateManyAdminInputEnvelope: ["data", "skipDuplicates"],
    AboutUpsertWithWhereUniqueWithoutAdminInput: ["where", "update", "create"],
    AboutUpdateWithWhereUniqueWithoutAdminInput: ["where", "data"],
    AboutUpdateManyWithWhereWithoutAdminInput: ["where", "data"],
    AboutScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "body", "admin_id", "updatedAt"],
    MessageUpsertWithWhereUniqueWithoutAdminInput: ["where", "update", "create"],
    MessageUpdateWithWhereUniqueWithoutAdminInput: ["where", "data"],
    MessageUpdateManyWithWhereWithoutAdminInput: ["where", "data"],
    MessageScalarWhereInput: ["AND", "OR", "NOT", "id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd"],
    ProjectUpsertWithWhereUniqueWithoutAdminInput: ["where", "update", "create"],
    ProjectUpdateWithWhereUniqueWithoutAdminInput: ["where", "data"],
    ProjectUpdateManyWithWhereWithoutAdminInput: ["where", "data"],
    ProjectScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt"],
    StackUpsertWithWhereUniqueWithoutAdminInput: ["where", "update", "create"],
    StackUpdateWithWhereUniqueWithoutAdminInput: ["where", "data"],
    StackUpdateManyWithWhereWithoutAdminInput: ["where", "data"],
    StackScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "image", "admin_id"],
    AdminCreateWithoutStackInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes", "about", "messages", "projects"],
    AdminCreateOrConnectWithoutStackInput: ["where", "create"],
    AdminUpsertWithoutStackInput: ["update", "create"],
    AdminUpdateWithoutStackInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes", "about", "messages", "projects"],
    TechCategoryCreateWithoutProjectInput: ["id", "name", "techs"],
    TechCategoryCreateOrConnectWithoutProjectInput: ["where", "create"],
    TechCategoryCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
    QuestionCreateWithoutProjectInput: ["id", "question", "answer"],
    QuestionCreateOrConnectWithoutProjectInput: ["where", "create"],
    QuestionCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
    SketchCreateWithoutProjectInput: ["id", "title", "description", "summary", "downloadables", "image"],
    SketchCreateOrConnectWithoutProjectInput: ["where", "create"],
    SketchCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
    AdminCreateWithoutProjectsInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes", "about", "messages", "stack"],
    AdminCreateOrConnectWithoutProjectsInput: ["where", "create"],
    TechCategoryUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
    TechCategoryUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
    TechCategoryUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
    TechCategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "project_id"],
    QuestionUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
    QuestionUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
    QuestionUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
    QuestionScalarWhereInput: ["AND", "OR", "NOT", "id", "question", "answer", "project_id"],
    SketchUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
    SketchUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
    SketchUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
    SketchScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "summary", "downloadables", "image", "project_id"],
    AdminUpsertWithoutProjectsInput: ["update", "create"],
    AdminUpdateWithoutProjectsInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes", "about", "messages", "stack"],
    TechCreateWithoutTech_categoriesInput: ["id", "name"],
    TechCreateOrConnectWithoutTech_categoriesInput: ["where", "create"],
    TechCreateManyTech_categoriesInputEnvelope: ["data", "skipDuplicates"],
    ProjectCreateWithoutTech_categoriesInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt", "questions", "sketches", "admin"],
    ProjectCreateOrConnectWithoutTech_categoriesInput: ["where", "create"],
    TechUpsertWithWhereUniqueWithoutTech_categoriesInput: ["where", "update", "create"],
    TechUpdateWithWhereUniqueWithoutTech_categoriesInput: ["where", "data"],
    TechUpdateManyWithWhereWithoutTech_categoriesInput: ["where", "data"],
    TechScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "tech_category_id"],
    ProjectUpsertWithoutTech_categoriesInput: ["update", "create"],
    ProjectUpdateWithoutTech_categoriesInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt", "questions", "sketches", "admin"],
    TechCategoryCreateWithoutTechsInput: ["id", "name", "project"],
    TechCategoryCreateOrConnectWithoutTechsInput: ["where", "create"],
    TechCategoryUpsertWithoutTechsInput: ["update", "create"],
    TechCategoryUpdateWithoutTechsInput: ["id", "name", "project"],
    ProjectCreateWithoutQuestionsInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt", "tech_categories", "sketches", "admin"],
    ProjectCreateOrConnectWithoutQuestionsInput: ["where", "create"],
    ProjectUpsertWithoutQuestionsInput: ["update", "create"],
    ProjectUpdateWithoutQuestionsInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt", "tech_categories", "sketches", "admin"],
    ProjectCreateWithoutSketchesInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt", "tech_categories", "questions", "admin"],
    ProjectCreateOrConnectWithoutSketchesInput: ["where", "create"],
    ProjectUpsertWithoutSketchesInput: ["update", "create"],
    ProjectUpdateWithoutSketchesInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt", "tech_categories", "questions", "admin"],
    AdminCreateWithoutAboutInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes", "messages", "projects", "stack"],
    AdminCreateOrConnectWithoutAboutInput: ["where", "create"],
    AdminUpsertWithoutAboutInput: ["update", "create"],
    AdminUpdateWithoutAboutInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes", "messages", "projects", "stack"],
    AdminCreateWithoutMessagesInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes", "about", "projects", "stack"],
    AdminCreateOrConnectWithoutMessagesInput: ["where", "create"],
    AdminUpsertWithoutMessagesInput: ["update", "create"],
    AdminUpdateWithoutMessagesInput: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt", "resumes", "about", "projects", "stack"],
    AboutCreateManyAdminInput: ["id", "title", "body", "updatedAt"],
    MessageCreateManyAdminInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "answeredAt", "createdAd"],
    ProjectCreateManyAdminInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt"],
    StackCreateManyAdminInput: ["id", "title", "image"],
    AboutUpdateWithoutAdminInput: ["id", "title", "body", "updatedAt"],
    MessageUpdateWithoutAdminInput: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "answeredAt", "createdAd"],
    ProjectUpdateWithoutAdminInput: ["id", "name", "image", "type", "github_url", "app_url", "summary", "createdAt", "updatedAt", "tech_categories", "questions", "sketches"],
    StackUpdateWithoutAdminInput: ["id", "title", "image"],
    TechCategoryCreateManyProjectInput: ["id", "name"],
    QuestionCreateManyProjectInput: ["id", "question", "answer"],
    SketchCreateManyProjectInput: ["id", "title", "description", "summary", "downloadables", "image"],
    TechCategoryUpdateWithoutProjectInput: ["id", "name", "techs"],
    QuestionUpdateWithoutProjectInput: ["id", "question", "answer"],
    SketchUpdateWithoutProjectInput: ["id", "title", "description", "summary", "downloadables", "image"],
    TechCreateManyTech_categoriesInput: ["id", "name"],
    TechUpdateWithoutTech_categoriesInput: ["id", "name"]
};
const outputsInfo = {
    AggregateAdmin: ["_count", "_min", "_max"],
    AdminGroupBy: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "resumes", "confirmed", "apikey", "password", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateStack: ["_count", "_min", "_max"],
    StackGroupBy: ["id", "title", "image", "admin_id", "_count", "_min", "_max"],
    AggregateProject: ["_count", "_min", "_max"],
    ProjectGroupBy: ["id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateTechCategory: ["_count", "_min", "_max"],
    TechCategoryGroupBy: ["id", "name", "project_id", "_count", "_min", "_max"],
    AggregateTech: ["_count", "_min", "_max"],
    TechGroupBy: ["id", "name", "tech_category_id", "_count", "_min", "_max"],
    AggregateQuestion: ["_count", "_min", "_max"],
    QuestionGroupBy: ["id", "question", "answer", "project_id", "_count", "_min", "_max"],
    AggregateSketch: ["_count", "_min", "_max"],
    SketchGroupBy: ["id", "title", "description", "summary", "downloadables", "image", "project_id", "_count", "_min", "_max"],
    AggregateAbout: ["_count", "_min", "_max"],
    AboutGroupBy: ["id", "title", "body", "admin_id", "updatedAt", "_count", "_min", "_max"],
    AggregateMessage: ["_count", "_min", "_max"],
    MessageGroupBy: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AdminCount: ["about", "messages", "projects", "stack"],
    AdminCountAggregate: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "resumes", "confirmed", "apikey", "password", "createdAt", "updatedAt", "_all"],
    AdminMinAggregate: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt"],
    AdminMaxAggregate: ["id", "email", "fname", "lname", "linkedIn", "whatsapp", "instagram", "github", "skype", "heroImage", "confirmed", "apikey", "password", "createdAt", "updatedAt"],
    StackCountAggregate: ["id", "title", "image", "admin_id", "_all"],
    StackMinAggregate: ["id", "title", "image", "admin_id"],
    StackMaxAggregate: ["id", "title", "image", "admin_id"],
    ProjectCount: ["tech_categories", "questions", "sketches"],
    ProjectCountAggregate: ["id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt", "_all"],
    ProjectMinAggregate: ["id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt"],
    ProjectMaxAggregate: ["id", "name", "image", "type", "github_url", "app_url", "summary", "admin_id", "createdAt", "updatedAt"],
    TechCategoryCount: ["techs"],
    TechCategoryCountAggregate: ["id", "name", "project_id", "_all"],
    TechCategoryMinAggregate: ["id", "name", "project_id"],
    TechCategoryMaxAggregate: ["id", "name", "project_id"],
    TechCountAggregate: ["id", "name", "tech_category_id", "_all"],
    TechMinAggregate: ["id", "name", "tech_category_id"],
    TechMaxAggregate: ["id", "name", "tech_category_id"],
    QuestionCountAggregate: ["id", "question", "answer", "project_id", "_all"],
    QuestionMinAggregate: ["id", "question", "answer", "project_id"],
    QuestionMaxAggregate: ["id", "question", "answer", "project_id"],
    SketchCountAggregate: ["id", "title", "description", "summary", "downloadables", "image", "project_id", "_all"],
    SketchMinAggregate: ["id", "title", "description", "summary", "downloadables", "image", "project_id"],
    SketchMaxAggregate: ["id", "title", "description", "summary", "downloadables", "image", "project_id"],
    AboutCountAggregate: ["id", "title", "body", "admin_id", "updatedAt", "_all"],
    AboutMinAggregate: ["id", "title", "body", "admin_id", "updatedAt"],
    AboutMaxAggregate: ["id", "title", "body", "admin_id", "updatedAt"],
    MessageCountAggregate: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd", "_all"],
    MessageMinAggregate: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd"],
    MessageMaxAggregate: ["id", "subject", "from", "files", "body", "read_status", "answer_status", "admin_id", "answeredAt", "createdAd"]
};
const argsInfo = {
    FindUniqueAdminArgs: ["where"],
    FindFirstAdminArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAdminArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAdminArgs: ["data"],
    CreateManyAdminArgs: ["data", "skipDuplicates"],
    DeleteAdminArgs: ["where"],
    UpdateAdminArgs: ["data", "where"],
    DeleteManyAdminArgs: ["where"],
    UpdateManyAdminArgs: ["data", "where"],
    UpsertAdminArgs: ["where", "create", "update"],
    AggregateAdminArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAdminArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueStackArgs: ["where"],
    FindFirstStackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyStackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateStackArgs: ["data"],
    CreateManyStackArgs: ["data", "skipDuplicates"],
    DeleteStackArgs: ["where"],
    UpdateStackArgs: ["data", "where"],
    DeleteManyStackArgs: ["where"],
    UpdateManyStackArgs: ["data", "where"],
    UpsertStackArgs: ["where", "create", "update"],
    AggregateStackArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByStackArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueProjectArgs: ["where"],
    FindFirstProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateProjectArgs: ["data"],
    CreateManyProjectArgs: ["data", "skipDuplicates"],
    DeleteProjectArgs: ["where"],
    UpdateProjectArgs: ["data", "where"],
    DeleteManyProjectArgs: ["where"],
    UpdateManyProjectArgs: ["data", "where"],
    UpsertProjectArgs: ["where", "create", "update"],
    AggregateProjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByProjectArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueTechCategoryArgs: ["where"],
    FindFirstTechCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTechCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateTechCategoryArgs: ["data"],
    CreateManyTechCategoryArgs: ["data", "skipDuplicates"],
    DeleteTechCategoryArgs: ["where"],
    UpdateTechCategoryArgs: ["data", "where"],
    DeleteManyTechCategoryArgs: ["where"],
    UpdateManyTechCategoryArgs: ["data", "where"],
    UpsertTechCategoryArgs: ["where", "create", "update"],
    AggregateTechCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByTechCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueTechArgs: ["where"],
    FindFirstTechArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTechArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateTechArgs: ["data"],
    CreateManyTechArgs: ["data", "skipDuplicates"],
    DeleteTechArgs: ["where"],
    UpdateTechArgs: ["data", "where"],
    DeleteManyTechArgs: ["where"],
    UpdateManyTechArgs: ["data", "where"],
    UpsertTechArgs: ["where", "create", "update"],
    AggregateTechArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByTechArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueQuestionArgs: ["where"],
    FindFirstQuestionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyQuestionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateQuestionArgs: ["data"],
    CreateManyQuestionArgs: ["data", "skipDuplicates"],
    DeleteQuestionArgs: ["where"],
    UpdateQuestionArgs: ["data", "where"],
    DeleteManyQuestionArgs: ["where"],
    UpdateManyQuestionArgs: ["data", "where"],
    UpsertQuestionArgs: ["where", "create", "update"],
    AggregateQuestionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByQuestionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueSketchArgs: ["where"],
    FindFirstSketchArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySketchArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateSketchArgs: ["data"],
    CreateManySketchArgs: ["data", "skipDuplicates"],
    DeleteSketchArgs: ["where"],
    UpdateSketchArgs: ["data", "where"],
    DeleteManySketchArgs: ["where"],
    UpdateManySketchArgs: ["data", "where"],
    UpsertSketchArgs: ["where", "create", "update"],
    AggregateSketchArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupBySketchArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueAboutArgs: ["where"],
    FindFirstAboutArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAboutArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAboutArgs: ["data"],
    CreateManyAboutArgs: ["data", "skipDuplicates"],
    DeleteAboutArgs: ["where"],
    UpdateAboutArgs: ["data", "where"],
    DeleteManyAboutArgs: ["where"],
    UpdateManyAboutArgs: ["data", "where"],
    UpsertAboutArgs: ["where", "create", "update"],
    AggregateAboutArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAboutArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueMessageArgs: ["where"],
    FindFirstMessageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyMessageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateMessageArgs: ["data"],
    CreateManyMessageArgs: ["data", "skipDuplicates"],
    DeleteMessageArgs: ["where"],
    UpdateMessageArgs: ["data", "where"],
    DeleteManyMessageArgs: ["where"],
    UpdateManyMessageArgs: ["data", "where"],
    UpsertMessageArgs: ["where", "create", "update"],
    AggregateMessageArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByMessageArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = resolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                for (const allFieldsDecorator of allFieldsDecorators) {
                    allFieldsDecorator(typePrototype, typeFieldName);
                }
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
//# sourceMappingURL=enhance.js.map