/**
 * The following function checks to see if there are any suspicious individuals in the list of
 * persons whose names are hard coded.
 */
function checkSecurity(people: string[]): void {
  let found = false;
  for (let i = 0; i < people.length; i++) {
    if (!found) {
      // big method and code duplication
      if (people[i] === "Don") {
        // higher coupling between modules, this method should be in another module
        // and checkSecurity usage should be changed. (Substitute Algorithm)
        sendAlert();
        found = true;
      }
      // using hard coded values instead of arguments, (Parametrize Method)
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
