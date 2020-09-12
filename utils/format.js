export function removeEmptyLines(string) {
  return string.replace(/\n\s*\n/g, '\n\n')
}
