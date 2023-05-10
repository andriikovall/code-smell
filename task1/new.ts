function isPersonSafe(person: string, blackList: string[]): boolean {
  return !blackList.includes(person);
}

function areAllPeopleSafe(people: string[], blackList: string[]): boolean {
  return people.every((p) => isPersonSafe(p, blackList));
}

function isSecurityPassed(people: string[]): boolean {
  /**
   * May be taken from anywhere. Here is a simple example.
   */
  const BLACK_LIST: string[] = ["Don", "John"];
  return areAllPeopleSafe(people, BLACK_LIST);
}

function main(): void {
  const people: string[] = ["Don", "John"];
  if (!isSecurityPassed(people)) {
    // sendAlert();
  }
}
