var monkey , monkey_running;
var banana ,bananaImage; 
var obstacle, obstacleImage;
var foodGroup;
var obstacleGroup;
var score;
var ground;
var rand;
var rand2;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  
  monkey = createSprite(50,215,10,10);
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(300,250,600,10);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0
  
}


function draw() {
  background(220);
  
  if(keyDown("space") && monkey.y >210){
    monkey.velocityY = -10;
  }
  
  
  
  if(monkey.isTouching(foodGroup)){
    
    score = score + 1;
    foodGroup.destroyEach();
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground)
  
  banana2();
  rock();
  
  if(monkey.isTouching(obstacleGroup)){
    
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    text("GAME OVER",280,140);
    
  }
  
  text("score:" + score,520,40);

  drawSprites()
}

 function banana2(){
   
   if(frameCount % 74 === 0){
     
     rand = Math.round(random(1,2));
     
  if(rand === 1){
     
  banana = createSprite(600,140,10,10);
  banana.addImage(bananaImage);
  banana.y = Math.round(random(100,300))
  banana.velocityX = -8;
  banana.scale = 0.05
  foodGroup.add(banana);
   
    }
   } 
 }

 function rock(){
   
   if(frameCount % 50 === 0){
     
     rand2 = Math.round(random(1,4));
     
     if(rand2 === 1){
  
  obstacle = createSprite(600,225,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -8;
  obstacle.scale = 0.1;
  obstacleGroup.add(obstacle);
  
     }
   }
}
