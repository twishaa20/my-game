var alien;
var robot;
var character1;
var character2;
var character3;
var character4;
var character5;
var character6;
var character7;
var character8;
var character9;
var character10;
var character11;
var character12;
var score = 0;
var time = 100;
var variable;
var character;
var gameState;

function preload(){
bg = loadImage("garden.jpg");
robotImg = loadImage("robot.png");
alienImg = loadImage("alien.png");
character1Img = loadImage("character1.png");
character2Img = loadImage("character2.png");
character3Img = loadImage("c1.png");
character4Img = loadImage("c11.png");
character5Img = loadImage("c12.png");
character6Img = loadImage("c21.png");
character7Img = loadImage("c22.png");
character8Img = loadImage("c23.png");
character9Img = loadImage("c4.png");
character10Img = loadImage("c41.png");
character11Img = loadImage("c42.png");
character12Img = loadImage("c43.png");
characterImg = loadImage("c 3.png");
}

function setup(){
   createCanvas(1200,600);
   

   robot = createSprite(200,200,50,50);
   robot.addImage(robotImg);
   robot.scale = 0.2;

   robot.velocityY = random(-3,8);
   robot.velocityX = random(-3,8);

   alien = createSprite(600,300,50,50);
   alien.addImage(alienImg);
   alien.scale = 0.2;

   character1 = createSprite(200,90,20,20);
   character1.addImage(character1Img);
   character1.scale = 0.2;

   character1.velocityX = random(-5,3);
   character1.velocityY = random(-5,3);

   character2 = createSprite(300,40,20,20);
   character2.addImage(character2Img);
   character2.scale = 0.2;

   character2.velocityY = random(-2,6);
   character2.velocityX = random(-2,6);

   character3 = createSprite(100,50,20,20);
   character3.addImage(character3Img);
   character3.scale = 0.2;

   character3.velocityY = random(-5,4);
   character3.velocityX = random(-5,4);

   character4 = createSprite(150,90,20,20);
   character4.addImage(character4Img);
   character4.scale = 0.2;

   character4.velocityY = random(-3,5);
   character4.velocityX = random(-3,5);

   character5 = createSprite(150,90,20,20);
   character5.addImage(character5Img);
   character5.scale = 0.2;

   character5.velocityY = random(-2,7);
   character5.velocityX = random(-2,7);

   character6 = createSprite(190,80,20,20);
   character6.addImage(character6Img);
   character6.scale = 0.2;

   character6.velocityY = random(-6,6);
   character6.velocityX = random(-6,6);

   character7 = createSprite(250,40,20,20);
   character7.addImage(character7Img);
   character7.scale = 0.2;

   character7.velocityY = random(-3,7);
   character7.velocityX = random(-3,7);

   character8 = createSprite(230,50,20,20);
   character8.addImage(character8Img);
   character8.scale = 0.2;

   character8.velocityY = random(-4,8);
   character8.velocityX = random(-4,8);

   character9= createSprite(230,50,20,20);
   character9.addImage(character9Img);
   character9.scale = 0.1;

   character9.velocityY = random(-4,8);
   character9.velocityX = random(-4,8);
   
   character10 = createSprite(230,50,20,20);
   character10.addImage(character10Img);
   character10.scale = 0.1;

   character10.velocityY = random(-4,8);
   character10.velocityX = random(-4,8);

   character11 = createSprite(230,50,20,20);
   character11.addImage(character11Img);
   character11.scale = 0.1;

   character11.velocityY = random(-4,8);
   character11.velocityX = random(-4,8);

   character12 = createSprite(230,50,20,20);
   character12.addImage(character12Img);
   character12.scale = 0.1


   character12.velocityY = random(-4,8);
   character12.velocityX = random(-4,8);

  character = createSprite(200,200,20,20);
   character.addImage(characterImg);
   character.scale = 0.2;

   character.velocityX = -3;
   character.velocityX = 6;
   character.visible = false;
   
}
  

  
 function draw(){
  background(bg);

  if(gameState === PLAY){
  time = time - 1;

  edges = createEdgeSprites();

  if(keyDown(UP_ARROW)){
     alien.velocityY = -3;
     alien.velocityX = 0;
  }
  
  if(keyDown(DOWN_ARROW)){
     alien.velocityY = 3;
     alien.velocityX = 0;
  }
  
  if(keyDown(LEFT_ARROW)){
     alien.velocityX = -3;
     alien.velocityY = 0;
  }
  
   if(keyDown(RIGHT_ARROW)){
      alien.velocityX = 3;
      alien.velocityY = 0;
   }


  character2.bounceOff(edges[0]);
  character2.bounceOff(edges[1]);
  character2.bounceOff(edges[2]);
  character2.bounceOff(edges[3]);

  character1.bounceOff(edges[0]);
  character1.bounceOff(edges[1]);
  character1.bounceOff(edges[2]);
  character1.bounceOff(edges[3]);

  character3.bounceOff(edges[0]);
  character3.bounceOff(edges[1]);
  character3.bounceOff(edges[2]);
  character3.bounceOff(edges[3]);

  character4.bounceOff(edges[0]);
  character4.bounceOff(edges[1]);
  character4.bounceOff(edges[2]);
  character4.bounceOff(edges[3]);

  character5.bounceOff(edges[0]);
  character5.bounceOff(edges[1]);
  character5.bounceOff(edges[2]);
  character5.bounceOff(edges[3]);

  character6.bounceOff(edges[0]);
  character6.bounceOff(edges[1]);
  character6.bounceOff(edges[2]);
  character6.bounceOff(edges[3]);

  character7.bounceOff(edges[0]);
  character7.bounceOff(edges[1]);
  character7.bounceOff(edges[2]);
  character7.bounceOff(edges[3]);

  character8.bounceOff(edges[0]);
  character8.bounceOff(edges[1]);
  character8.bounceOff(edges[2]);
  character8.bounceOff(edges[3]);

  character9.bounceOff(edges[0]);
  character9.bounceOff(edges[1]);
  character9.bounceOff(edges[2]);
  character9.bounceOff(edges[3]);

  character10.bounceOff(edges[0]);
  character10.bounceOff(edges[1]);
  character10.bounceOff(edges[2]);
  character10.bounceOff(edges[3]);

  character11.bounceOff(edges[0]);
  character11.bounceOff(edges[1]);
  character11.bounceOff(edges[2]);
  character11.bounceOff(edges[3]);

  character12.bounceOff(edges[0]);
  character12.bounceOff(edges[1]);
  character12.bounceOff(edges[2]);
  character12.bounceOff(edges[3]);

  character.bounceOff(edges[0]);
  character.bounceOff(edges[1]);
  character.bounceOff(edges[2]);
  character.bounceOff(edges[3]);
 
  robot.bounceOff(edges[0]);
  robot.bounceOff(edges[1]);
  robot.bounceOff(edges[2]);
  robot.bounceOff(edges[3]); 

  if(alien.isTouching(character1)){
     character1.destroy();
     score = score+100;
  }

  if(alien.isTouching(character2)){
   character2.destroy();
   score = score+100;
}

if(alien.isTouching(character3)){
   character3.destroy();
   score = score+100;
}

if(alien.isTouching(character4)){
   character4.destroy();
   score = score+100;
} 
  
if(alien.isTouching(character5)){
   character5.destroy();
   score = score+100;
}

if(alien.isTouching(character6)){
   character6.destroy();
   score = score+100;
}

if(alien.isTouching(character7)){
   character7.destroy();
   score = score+100;
}

if(alien.isTouching(character8)){
   character8.destroy();
   score = score+100;
}

if(alien.isTouching(character9)){
   character9.destroy();
   score = score+100;
}

if(alien.isTouching(character10)){
   character10.destroy();
   score = score+100;
}

if(alien.isTouching(character11)){
   character11.destroy();
   score = score+100;
}

if(alien.isTouching(character12)){
   character12.destroy();
   score = score+100;
}

if(alien.isTouching(character)){
   character.visible = false;
   score = score+10;
}

if(alien.isTouching(robot)){
   variable = World.frameCount;
   
}

if(variable+3 === World.frameCount ){
   character.visible = true;   
   score = score - 200;
}
textSize(40);
fill("black");
text("Score = " + score,330,30);

text("time = "+ time, 200,50)
  }
else if(gameState === END){
if(time === 0 && score > 2500){
   fill("black");
   text("YOU WIN!", 200,200);
} 

else if(time === 0 && score < 2500){
   text("YOU LOSE!", 200,200);
}
} 
alien.display();
robot.display();
character1.display();
character2.display();
character3.display();
character4.display();
character5.display();
character6.display();
character7.display();
character8.display();
character9.display();
character10.display();
character11.display();
character12.display();


  drawSprites();
 }

