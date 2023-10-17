export function greetingEnabled() {
  const args = process.argv.slice(2);

  return !args.includes("--no-greeting") && !args.includes("-ng");
}

export function devEnabled() {
  const args = process.argv.slice(2);

  return args.includes("--dev") || args.includes("-d");
}

export function getNameFromFlag() {
  const candidateFlags = process.argv
    .slice(2)
    .filter((flag) => flag.includes("--name="));

  if (!candidateFlags.length) {
    return null;
  }

  // use the first flag containing "--name=", then get the text after the "="
  return candidateFlags[0].split("=")[1];
}
