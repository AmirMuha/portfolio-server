"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
if (process.env.NODE_ENV === "development") {
    const envConfig = dotenv_1.default.config({
        path: (0, path_1.resolve)(__dirname, "../../.env." + process.env.NODE_ENV),
    });
    if (envConfig.error) {
        process.exit();
    }
}
//# sourceMappingURL=configuringEnvironmentVariables.js.map