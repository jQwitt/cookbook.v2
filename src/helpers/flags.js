export function greetingEnabled() {
  return !process.argv.slice(2).includes("--no-greeting");
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
