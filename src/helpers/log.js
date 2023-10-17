import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";

export function greet() {
  console.log(gradient.passion(figlet.textSync("cookbook v2")));
  console.log("Let's get cookin!\n");
}

export function passion(str) {
  return chalk.bold(gradient.passion(str));
}
