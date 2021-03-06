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
var TechCategoryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechCategoryWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProjectRelationFilter_1 = require("../inputs/ProjectRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TechListRelationFilter_1 = require("../inputs/TechListRelationFilter");
let TechCategoryWhereInput = TechCategoryWhereInput_1 = class TechCategoryWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [TechCategoryWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCategoryWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechCategoryWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCategoryWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [TechCategoryWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCategoryWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCategoryWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCategoryWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => TechListRelationFilter_1.TechListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCategoryWhereInput.prototype, "techs", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProjectRelationFilter_1.ProjectRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCategoryWhereInput.prototype, "project", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], TechCategoryWhereInput.prototype, "project_id", void 0);
TechCategoryWhereInput = TechCategoryWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], TechCategoryWhereInput);
exports.TechCategoryWhereInput = TechCategoryWhereInput;
//# sourceMappingURL=TechCategoryWhereInput.js.map