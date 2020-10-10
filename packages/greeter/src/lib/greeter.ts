function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export class Greeter {

  greet(name: string) {
    if (typeof name !== 'string') throw new Error('You must provide a string to Greeter.greet');
    return 'Hello ' + capitalize(name.trim());
  }
}
