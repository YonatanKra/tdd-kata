export class Greeter {

  greet(name: string) {
    if (typeof name !== 'string') throw new Error('You must provide a string to Greeter.greet');
    return 'Hello ' + name.trim();
  }
}
