import { clone } from "./helpers/fs.js";

export function cook(obj) {
  const { name, template, flavor } = obj;
  const templatePath = `${template}/${flavor}`;

  clone(templatePath, name);

  return null;
}
