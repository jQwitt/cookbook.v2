import * as yaml from "js-yaml";
import fs from "fs-extra";
import path from "path";

const CURRENT_PATH = getDirname();

export function parse() {
  const result = {};

  try {
    const templates = fs.readdirSync("src/configs");

    templates.map((id) => {
      const template = yaml.load(fs.readFileSync(`src/configs/${id}`));

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
      `${CURRENT_PATH}../output/${name}`
    );
    console.log("project created in /output");
  } catch (e) {
    console.log(e);
  }
}

export function getDirname() {
  return "/" + import.meta.url.split("file:///")[1].split("src")[0];
}
