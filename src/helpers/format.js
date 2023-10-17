export function formatChoices(arr) {
  return arr.map((key) => ({ name: key, value: key }));
}

export function asSeconds(s) {
  const seconds = ~~(s / 1000);
  const milleseonds = s % 1000;

  return seconds > 1 ? `${seconds}s` : `${milleseonds}ms`;
}
