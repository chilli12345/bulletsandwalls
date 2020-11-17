var bullet, wall;
var weight, speed, thickness;
var bulletImage;

function preload(){
  bulletImage=loadImage("download.jpg");
}

function setup () {
  createCanvas(1600,400);
  
  thickness=random(22,83);
  
  weight=random(30,52);
  speed=random(223,321);

  bullet=createSprite(50,200,40,20);
  bullet.addImage(bulletImage);
  bullet.scale=0.5;
  bullet.shapeColor="white"
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";

}

function draw(){
  background(0);
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness * thickness * thickness);
    if(damage<10){
      wall.shapeColor="green";
      textSize(30);
      fill("green");
      text("Wall is effective",600,200);
      text("Weight= "+Math.round(weight),600,150);
      text("thickness= "+Math.round(thickness),600,100);
      text("speed= "+Math.round(speed),600,60);
    }
    if(damage>10){
      wall.shapeColor="red";
      textSize(30);
      fill("red");
      text("Wall is not effective",600,200);
      text("Weight= "+Math.round(weight),600,150);
      text("thickness= "+Math.round(thickness),600,100);
      text("speed= "+Math.round(speed),600,60);
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}
