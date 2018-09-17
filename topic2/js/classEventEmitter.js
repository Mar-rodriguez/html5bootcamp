class EventEmitter{
  constructor(){
  }

  on(eventName, callback){
    addEventListener(eventName, callback);  
  }
  emit(eventName){
    dispatchEvent(eventName);
  }
  off(eventName, callback){
    removeEventListener(eventName, callback);
  }
}