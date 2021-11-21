import {
  ModelConfig,
  ModelsEnhanceMap,
  applyModelsEnhanceMap,
} from "../../../prisma/generated/type-graphql";
import {
  aboutPropsValidation,
  adminPropsValidation,
  messagePropsValidation,
  projectPropsValidation,
  questionPropsValidation,
  sketchPropsValidation,
  techCategoryPropsValidation,
  techPropsValidation,
} from "../validations";

// ##############################################
// ####################### CONFIGURATION ########
// ##############################################
const aboutModelConfig: ModelConfig<"About"> = {
  fields: {
    ...aboutPropsValidation,
  },
};
const projectModelConfig: ModelConfig<"Project"> = {
  fields: {
    ...projectPropsValidation,
  },
};
const adminModelConfig: ModelConfig<"Admin"> = {
  fields: {
    ...adminPropsValidation,
  },
};
const sketchModelConfig: ModelConfig<"Sketch"> = {
  fields: {
    ...sketchPropsValidation,
  },
};
const messageModelConfig: ModelConfig<"Message"> = {
  fields: {
    ...messagePropsValidation,
  },
};
const questionModelConfig: ModelConfig<"Question"> = {
  fields: {
    ...questionPropsValidation,
  },
};
const techCategoryModelConfig: ModelConfig<"TechCategory"> = {
  fields: {
    ...techCategoryPropsValidation,
  },
};
const techModelConfig: ModelConfig<"Tech"> = {
  fields: {
    ...techPropsValidation,
  },
};
// ##############################################
// ####################### ENHANCEMENT ##########
// ##############################################
const modelsEnhanceMap: ModelsEnhanceMap = {
  Project: projectModelConfig,
  About: aboutModelConfig,
  Admin: adminModelConfig,
  Message: messageModelConfig,
  Sketch: sketchModelConfig,
  Tech: techModelConfig,
  TechCategory: techCategoryModelConfig,
  Question: questionModelConfig,
};
// ##############################################
// ####################### APPLICATION ##########
// ##############################################
export default () => {
  applyModelsEnhanceMap(modelsEnhanceMap);
};
