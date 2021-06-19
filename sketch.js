var seaImg, sea;
var shipImg,ship;
//var backgroudImg;
function preload(){
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship1.png", "ship2.png")

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,100,400,40);
  sea.addImage('sea',seaImg);
  sea.velocityX=-2;
  sea.x=sea.width/2;
  ship=createSprite(200,275,40,40);
  ship.addAnimation('ship',shipImg)
  ship.scale=0.2
  
}

function draw() {
  background("white");
 drawSprites();
}