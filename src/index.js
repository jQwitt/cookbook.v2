import { select } from "@inquirer/prompts";
import path from "path";

import { parse, clone, formatChoices } from "./helpers/index.js";
import { cook } from "./cook.js";

const cookbook = parse();

const selectedTemplate = await select({
  message: "What template would you like to use?",
  choices: formatChoices(Object.keys(cookbook)),
});

const prompts = cookbook[selectedTemplate].map(({ key, message, options }) => ({
  key,
  message,
  choices: formatChoices(options),
}));

const recipe = { template: selectedTemplate };
for (const { key, message, choices } of prompts) {
  await select({
    message,
    choices,
  }).then((selection) => (recipe[key] = selection));
}

cook(recipe);
