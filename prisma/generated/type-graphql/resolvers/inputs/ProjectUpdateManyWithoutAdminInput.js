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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdateManyWithoutAdminInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProjectCreateManyAdminInputEnvelope_1 = require("../inputs/ProjectCreateManyAdminInputEnvelope");
const ProjectCreateOrConnectWithoutAdminInput_1 = require("../inputs/ProjectCreateOrConnectWithoutAdminInput");
const ProjectCreateWithoutAdminInput_1 = require("../inputs/ProjectCreateWithoutAdminInput");
const ProjectScalarWhereInput_1 = require("../inputs/ProjectScalarWhereInput");
const ProjectUpdateManyWithWhereWithoutAdminInput_1 = require("../inputs/ProjectUpdateManyWithWhereWithoutAdminInput");
const ProjectUpdateWithWhereUniqueWithoutAdminInput_1 = require("../inputs/ProjectUpdateWithWhereUniqueWithoutAdminInput");
const ProjectUpsertWithWhereUniqueWithoutAdminInput_1 = require("../inputs/ProjectUpsertWithWhereUniqueWithoutAdminInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectUpdateManyWithoutAdminInput = class ProjectUpdateManyWithoutAdminInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ProjectCreateWithoutAdminInput_1.ProjectCreateWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectUpdateManyWithoutAdminInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutAdminInput_1.ProjectCreateOrConnectWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectUpdateManyWithoutAdminInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutAdminInput_1.ProjectUpsertWithWhereUniqueWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectUpdateManyWithoutAdminInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProjectCreateManyAdminInputEnvelope_1.ProjectCreateManyAdminInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectUpdateManyWithoutAdminInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereUniqueInput_1.ProjectWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectUpdateManyWithoutAdminInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereUniqueInput_1.ProjectWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectUpdateManyWithoutAdminInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereUniqueInput_1.ProjectWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectUpdateManyWithoutAdminInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProjectWhereUniqueInput_1.ProjectWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectUpdateManyWithoutAdminInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutAdminInput_1.ProjectUpdateWithWhereUniqueWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectUpdateManyWithoutAdminInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutAdminInput_1.ProjectUpdateManyWithWhereWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectUpdateManyWithoutAdminInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ProjectScalarWhereInput_1.ProjectScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], ProjectUpdateManyWithoutAdminInput.prototype, "deleteMany", void 0);
ProjectUpdateManyWithoutAdminInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ProjectUpdateManyWithoutAdminInput);
exports.ProjectUpdateManyWithoutAdminInput = ProjectUpdateManyWithoutAdminInput;
//# sourceMappingURL=ProjectUpdateManyWithoutAdminInput.js.map