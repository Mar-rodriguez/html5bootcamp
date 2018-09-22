const residentEvil = new Movie ('Resident Evil', '2002', '100');

const mila = new Actor ('Mila','40');
const michelle = new Actor ('Michelle','40');

residentEvil.addCast([mila, michelle]);

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(actors);

const logger1 = new Logger();
