var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2;

var carImg1,carImg2,carImg3,carImg4;
var trackImg
var groundImg;

function preload(){
  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car2.png");
  trackImg = loadImage("images/track.jpg");
  groundImg = loadImage("images/ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
