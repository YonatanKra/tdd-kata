function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export class Greeter {
  constructor(private date = new Date()) {
  }

  greet(name: string) {
    if (typeof name !== 'string') throw new Error('You must provide a string to Greeter.greet');
    let prefix = 'Hello ';
    if ((this.date.getHours() >= 6 && this.date.getHours() < 12) || (this.date.getHours() === 12 && this.date.getMinutes() === 0)) {
      prefix = 'Good morning ';
    }
    if ((this.date.getHours() >= 18 && this.date.getHours() < 22) || (this.date.getHours() === 22 && this.date.getMinutes() === 0)) {
      prefix = 'Good evening ';
    }
    return prefix + capitalize(name.trim());
  }
}
