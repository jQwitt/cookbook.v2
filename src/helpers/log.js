import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";

import { devEnabled } from "./flags.js";

export function greet() {
  info(gradient.passion(figlet.textSync("cookbook v2")));
  info("Let's get cookin!\n");
}

// CONSOLE STYLING //
export function passion(str) {
  return chalk.bold(gradient.passion(str));
}

export function success(str) {
  return chalk.bold.greenBright(`successfully ${str}`);
}

// LOG LEVELS //
export function info(str) {
  console.log(str);
}

export function dev(str) {
  if (devEnabled()) {
    console.log(str);
  }
}
