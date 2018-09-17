class Movie extends EventEmitter {
  constructor(name,year,duration){
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
    this.castList = [];
  }
  play(){
    super.emit(new Event(`${this.title}.play`));
  }
  pause(){
    super.emit(new Event(`${this.title}.pause`));
  }
  resume(){
    super.emit(new Event(`${this.title}.resume`));
  }
  addCast(cast){
    if (Array.isArray(cast)){
      for(let actor of cast){
        this.castList.push(actor);
      }
    }else{
      this.castList.push(cast);
    }
  }
}

let social = {
  share(friendName){
    console.log(`${friendName} share ${this.name}`);
  },
  like(friendName){
    console.log(`${friendName} like ${this.name}`);
  }
};

Object.assign(Movie.prototype, social);