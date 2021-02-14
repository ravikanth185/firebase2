var database;
var gamestate=0,playercount;
var form,game,player;
var allplayers;
var car1
var car2
var car3
var car4
var cars
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-60);
  game= new Game()
game.getstate()
game.start()

}
function draw(){
  background("white");
  if(playercount===4){
    game.update(1)
  }
  if(gamestate===1){
    game.play()
  }
  
  
}

