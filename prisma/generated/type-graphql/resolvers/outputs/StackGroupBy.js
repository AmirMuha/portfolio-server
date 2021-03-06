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
exports.StackGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const StackCountAggregate_1 = require("../outputs/StackCountAggregate");
const StackMaxAggregate_1 = require("../outputs/StackMaxAggregate");
const StackMinAggregate_1 = require("../outputs/StackMinAggregate");
let StackGroupBy = class StackGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], StackGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], StackGroupBy.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], StackGroupBy.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], StackGroupBy.prototype, "admin_id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StackCountAggregate_1.StackCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => StackMinAggregate_1.StackMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => StackMaxAggregate_1.StackMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], StackGroupBy.prototype, "_max", void 0);
StackGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], StackGroupBy);
exports.StackGroupBy = StackGroupBy;
//# sourceMappingURL=StackGroupBy.js.map