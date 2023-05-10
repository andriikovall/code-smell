/**
 * The following function checks to see if there are any suspicious individuals in the list of
 * persons whose names are hard coded.
 */
function checkSecurity(people: string[]): void {
  let found = false;
  for (let i = 0; i < people.length; i++) {
    if (!found) {
      if (people[i] === "Don") {
        sendAlert();
        found = true;
      }
      if (people[i] === "John") {
        sendAlert();
        found = true;
      }
    }
  }
}

function sendAlert() {
  throw new Error("stub");
}
