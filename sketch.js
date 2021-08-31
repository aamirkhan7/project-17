
var monkey , monkey_running
var banana ,bananaImage, obstacle, stoneImage
var bananaGroup, stoneGroup
var score
var ground
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var stone
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600,300)
 monkey=createSprite(50,200,20,20)
      monkey.addAnimation("running", monkey_running);
    monkey.scale=0.15

   ground=createSprite(300,244,1200,5)
  
  stonesGroup = createGroup();
   bananaGroup = createGroup();
  score = 0
}


function draw() {
  background("white");
  //stroke("black")
 // textSize(15);
  fill("black")
  score=Math.ceil(frameCount/frameRate())
  text("survival time:"+score,450,50)
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.7
  spawnobstacles()
  spawnbananas()
  monkey.collide(ground)
  
 drawSprites();   
  
  
}
function spawnobstacles(){
  if (frameCount % 200 === 0) {
    var stone = createSprite(width,height-100,40,10);
   // stone.y = Math.round(random(height/2 -50 ,height/2 -30));
    stone.addImage(stoneImage);
    stone.scale = 0.2;
    stone.velocityX = -3;
    
     //assign lifetime to the variable
    stone.lifetime = 200;
    
    //adjust the depth
    stone.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each stone to the group
    stonesGroup.add(stone);
  }
}
function spawnbananas(){
  if (frameCount % 60 === 0) {
    var banana = createSprite(width,random(100,120),40,10);
   // banana.y = Math.round(random(height/2+20,height-20));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each stone to the group
    bananaGroup.add(banana);
  }
}


