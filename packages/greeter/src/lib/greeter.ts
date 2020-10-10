function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getGreetingPrefix(date: Date) {
  let prefix = 'Hello ';
  if ((date.getHours() >= 6 && date.getHours() < 12) || (date.getHours() === 12 && date.getMinutes() === 0)) {
    prefix = 'Good morning ';
  }
  if ((date.getHours() >= 18 && date.getHours() <= 21)) {
    prefix = 'Good evening ';
  }
  if ((date.getHours() >= 22 && date.getHours() <= 23) || (date.getHours() >= 0 && date.getHours() <= 5) ) {
    prefix = 'Good night ';
  }

  return prefix;
}

export class Greeter {
  constructor(private date = new Date()) {
  }

  greet(name: string) {
    if (typeof name !== 'string') throw new Error('You must provide a string to Greeter.greet');
    const prefix = getGreetingPrefix(this.date);
    const greeting = prefix + capitalize(name.trim());
    console.log(greeting);
    return greeting;
  }
}
