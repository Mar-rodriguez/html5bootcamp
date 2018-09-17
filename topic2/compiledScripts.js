"use strict";

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
"use strict";

class EventEmitter {
  constructor() {}

  on(eventName, callback) {
    addEventListener(eventName, callback);
  }

  emit(eventName) {
    dispatchEvent(eventName);
  }

  off(eventName, callback) {
    removeEventListener(eventName, callback);
  }

}
"use strict";

class Logger {
  contructor() {}

  log(movie) {
    movie.on(`${movie.title}.play`, function () {
      console.log("The 'play' event has been emitted");
    });
  }

}
"use strict";

class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
    this.castList = [];
  }

  play() {
    super.emit(new Event(`${this.title}.play`));
  }

  pause() {
    super.emit(new Event(`${this.title}.pause`));
  }

  resume() {
    super.emit(new Event(`${this.title}.resume`));
  }

  addCast(cast) {
    if (Array.isArray(cast)) {
      for (let actor of cast) {
        this.castList.push(actor);
      }
    } else {
      this.castList.push(cast);
    }
  }

}

let social = {
  share(friendName) {
    console.log(`${friendName} share ${this.name}`);
  },

  like(friendName) {
    console.log(`${friendName} like ${this.name}`);
  }

};
Object.assign(Movie.prototype, social);
"use strict";

const residentEvil = new Movie('Resident Evil', '2002', '100');
const mila = new Actor('Mila', '40');
const michelle = new Actor('Michelle', '40');
residentEvil.addCast([mila, michelle]);
const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];
terminator.addCast(arnold);
terminator.addCast(actors);
const logger1 = new Logger();
