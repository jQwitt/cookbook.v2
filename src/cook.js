import { clone } from "./helpers/index.js";

export function cook(obj) {
  const path = obj.template + "/" + obj.flavor;

  clone(path);

  return null;
}
