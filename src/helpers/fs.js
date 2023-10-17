import * as yaml from "js-yaml";
import fs from "fs-extra";
import chalk from "chalk";

import { passion } from "./log.js";

const CURRENT_PATH = getDirname();

export function parse() {
  const result = {};

  try {
    const templates = fs.readdirSync(`${CURRENT_PATH}src/configs`);

    templates.map((id) => {
      const template = yaml.load(
        fs.readFileSync(`${CURRENT_PATH}src/configs/${id}`)
      );

      result[template.name] = template.prompts;
    });
  } catch (e) {
    console.log(e);
  }

  return result;
}

export function clone(template, name) {
  try {
    fs.copySync(
      `${CURRENT_PATH}src/templates/${template}`,
      `${CURRENT_PATH}output/${name}`
    );
    console.log(
      `\ncloned ${chalk.blue(template)} into in ${chalk.yellow(
        CURRENT_PATH + "output/"
      )}${passion(name)}`
    );
  } catch (e) {
    console.log(e);
  }
}

export function getDirname() {
  return "/" + import.meta.url.split("file:///")[1].split("src")[0];
}
