import * as yaml from "js-yaml";
import fse from "fs-extra";
import fs from "fs";

const CURRENT_PATH = "/Volumes/SSD/projects/cookbook.v2/src/";

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

export function clone(path) {
  try {
    fse.copy(CURRENT_PATH + "templates/" + path, CURRENT_PATH + "../output");
    console.log("project created in /output");
  } catch (e) {
    console.log(e);
  }
}
