class Logger{
  contructor(){
  }
  log(movie){
    movie.on(`${movie.title}.play`, function(){ console.log("The 'play' event has been emitted"); });
  }
}