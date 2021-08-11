var seaImge;
var sea;
var ship_Image;
var ship;

function preload(){
  ship_Image = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImge = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
   ship = createSprite(130,200,30,30);
   ship.addAnimation("ship",ship_Image);
   ship.scale=0.25;

   sea = createSprite(400,200);
   sea.addImage(seaImge);
   sea.scale=0.3;
   
}

function draw() {
  background(0);
  sea.velocityX=-2; 
  if(sea.x < 0){
    sea.x = sea.width/4;
  }
  drawSprites();
}