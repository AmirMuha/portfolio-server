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
exports.StackUpdateManyWithoutAdminInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const StackCreateManyAdminInputEnvelope_1 = require("../inputs/StackCreateManyAdminInputEnvelope");
const StackCreateOrConnectWithoutAdminInput_1 = require("../inputs/StackCreateOrConnectWithoutAdminInput");
const StackCreateWithoutAdminInput_1 = require("../inputs/StackCreateWithoutAdminInput");
const StackScalarWhereInput_1 = require("../inputs/StackScalarWhereInput");
const StackUpdateManyWithWhereWithoutAdminInput_1 = require("../inputs/StackUpdateManyWithWhereWithoutAdminInput");
const StackUpdateWithWhereUniqueWithoutAdminInput_1 = require("../inputs/StackUpdateWithWhereUniqueWithoutAdminInput");
const StackUpsertWithWhereUniqueWithoutAdminInput_1 = require("../inputs/StackUpsertWithWhereUniqueWithoutAdminInput");
const StackWhereUniqueInput_1 = require("../inputs/StackWhereUniqueInput");
let StackUpdateManyWithoutAdminInput = class StackUpdateManyWithoutAdminInput {
};
__decorate([
    TypeGraphQL.Field(_type => [StackCreateWithoutAdminInput_1.StackCreateWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackUpdateManyWithoutAdminInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StackCreateOrConnectWithoutAdminInput_1.StackCreateOrConnectWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackUpdateManyWithoutAdminInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StackUpsertWithWhereUniqueWithoutAdminInput_1.StackUpsertWithWhereUniqueWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackUpdateManyWithoutAdminInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => StackCreateManyAdminInputEnvelope_1.StackCreateManyAdminInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackUpdateManyWithoutAdminInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StackWhereUniqueInput_1.StackWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackUpdateManyWithoutAdminInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StackWhereUniqueInput_1.StackWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackUpdateManyWithoutAdminInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StackWhereUniqueInput_1.StackWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackUpdateManyWithoutAdminInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StackWhereUniqueInput_1.StackWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackUpdateManyWithoutAdminInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StackUpdateWithWhereUniqueWithoutAdminInput_1.StackUpdateWithWhereUniqueWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackUpdateManyWithoutAdminInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StackUpdateManyWithWhereWithoutAdminInput_1.StackUpdateManyWithWhereWithoutAdminInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackUpdateManyWithoutAdminInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [StackScalarWhereInput_1.StackScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackUpdateManyWithoutAdminInput.prototype, "deleteMany", void 0);
StackUpdateManyWithoutAdminInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], StackUpdateManyWithoutAdminInput);
exports.StackUpdateManyWithoutAdminInput = StackUpdateManyWithoutAdminInput;
//# sourceMappingURL=StackUpdateManyWithoutAdminInput.js.map