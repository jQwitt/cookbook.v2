import { rimrafSync } from "rimraf";

import { info, success } from "../helpers/log.js";
import { asSeconds } from "../helpers/format.js";

async function clean() {
  const start = Date.now();
  info("cleaning...");

  rimrafSync("./output");

  const total = Date.now() - start;
  info(success(`cleaned in ${asSeconds(total)}!`));
}

await clean();
