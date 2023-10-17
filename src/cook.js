import { clone } from "./helpers/fs.js";

export function cook(obj) {
  const { name, template, flavor } = obj;
  const flavorKey = flavor.split("(")[0].split(" ")[0];
  const templatePath = `${template}/${flavorKey}`;

  clone(templatePath, name);

  return null;
}
