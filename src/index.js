import { select } from "@inquirer/prompts";

import { parse } from "./helpers/index.js";

const cookbook = parse();

const templateInput = await select({
  message: "What template would you like to use?",
  choices: Object.keys(cookbook).map((key) => ({ name: key, value: key })),
});

const template = cookbook[templateInput];
