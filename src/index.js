#! /usr/bin/env node
import { input, select } from "@inquirer/prompts";

import { parse } from "./helpers/fs.js";
import { formatChoices } from "./helpers/format.js";
import { info, greet, passion } from "./helpers/log.js";
import { greetingEnabled, getNameFromFlag } from "./helpers/flags.js";

import { cook } from "./cook.js";

try {
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
  info(`Cooking up some ${passion(name)}\n`);

  const selectedTemplate = await select({
    message: "What template would you like to use?",
    choices: formatChoices(Object.keys(cookbook)),
  });
  recipe.template = selectedTemplate;
  recipe.postInstall = cookbook[selectedTemplate].postInstall;

  const prompts = cookbook[selectedTemplate].prompts.map(
    ({ key, message, options }) => ({
      key,
      message,
      choices: formatChoices(options),
    })
  );

  for (const { key, message, choices } of prompts) {
    await select({
      message,
      choices,
    }).then((selection) => (recipe[key] = selection));
  }

  if (isDev) cook(recipe);
} catch (e) {
  info("\n" + passion("bye!"));
}
