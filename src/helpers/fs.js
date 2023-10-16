import * as yaml from "js-yaml";
import fs from "fs";

export function parse() {
  const result = {};

  try {
    const templates = fs.readdirSync("src/templates");

    templates.map((id) => {
      const template = yaml.load(fs.readFileSync(`src/templates/${id}`));

      result[template.name] = template.prompts;
    });
  } catch (e) {
    console.log(e);
  }

  return result;
}
