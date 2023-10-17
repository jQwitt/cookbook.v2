import * as yaml from "js-yaml";
import fs from "fs-extra";
import chalk from "chalk";

import { passion } from "./log.js";
import { rimraf } from "rimraf";
import { rimrafSync } from "rimraf";

const CURRENT_PATH = getDirname();

export function parse() {
  const result = {};

  try {
    const templates = fs.readdirSync(`${CURRENT_PATH}src/configs`);

    templates.map((id) => {
      const template = yaml.load(
        fs.readFileSync(`${CURRENT_PATH}src/configs/${id}`)
      );
      const { postInstall, prompts } = template;

      result[template.name] = { postInstall, prompts };
    });
  } catch (e) {
    console.log(e);
  }

  return result;
}

export function clone(template, name) {
  const SRC = `${CURRENT_PATH}src/templates/${template}`;
  const OUT = `${CURRENT_PATH}output/${name}`;
  try {
    rimrafSync(OUT);
    fs.copySync(SRC, OUT);
    console.log(
      `\ncloned ${chalk.blue(template)} into in ${chalk.yellow(
        CURRENT_PATH + "output/"
      )}${passion(name)}`
    );
    return OUT;
  } catch (e) {
    console.log(e);
  }
  return null;
}

export function getDirname() {
  return "/" + import.meta.url.split("file:///")[1].split("src")[0];
}
