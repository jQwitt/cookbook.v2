import { execSync } from "child_process";

import { clone } from "./helpers/fs.js";
import { info, success } from "./helpers/log.js";
import { asSeconds } from "./helpers/format.js";

export function cook(obj) {
  const { name, template, flavor, postInstall } = obj;
  const flavorKey = flavor.split("(")[0].split(" ")[0];
  const templatePath = `${template}/${flavorKey}`;

  const outputPath = clone(templatePath, name);

  if (outputPath && postInstall) {
    const start = Date.now();
    info("\nrunning post install scripts...");

    postInstall.map((cmd) => execSync(`cd ${outputPath} && ${cmd}`));

    const total = Date.now() - start;
    info(success(`ran scripts in ${asSeconds(total)}`));
  }

  return null;
}
