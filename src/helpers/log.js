import figlet from "figlet";
import gradient from "gradient-string";

export function greet() {
  console.log(gradient.passion(figlet.textSync("cookbook v2")));
  console.log("Let's get cookin!\n");
}
