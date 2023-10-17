#! /usr/bin/env node
import { input, select } from "@inquirer/prompts";
import path from "path";
import chalk from "chalk";
import gradient from "gradient-string";

import { parse, clone } from "./helpers/fs.js";
import { formatChoices } from "./helpers/format.js";
import { greet } from "./helpers/log.js";
import { greetingEnabled, getNameFromFlag } from "./helpers/flags.js";

import { cook } from "./cook.js";

const cookbook = parse();

if (greetingEnabled()) greet();

let name = getNameFromFlag();
if (!name) {
  name = await input({
    message: "What would you like to name your project?",
    validate: (str) => str.length > 0,
  });
}
const recipe = { name };
console.log(`Cooking up some ${chalk.bold(gradient.passion(name))}\n`);

const selectedTemplate = await select({
  message: "What template would you like to use?",
  choices: formatChoices(Object.keys(cookbook)),
});
recipe.template = selectedTemplate;

const prompts = cookbook[selectedTemplate].map(({ key, message, options }) => ({
  key,
  message,
  choices: formatChoices(options),
}));

for (const { key, message, choices } of prompts) {
  await select({
    message,
    choices,
  }).then((selection) => (recipe[key] = selection));
}

cook(recipe);
