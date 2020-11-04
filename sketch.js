var monkey, rock, ground,monkeyImage,rockImage,groundImage,bannanaImage, stoneImage,invisibleGround,survivalTime,BanannaGroup,ObstacaleGroup;


function preload(){
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  groundImage = loadImage("jungle.jpg");
  
  bannanaImage = loadImage("banana.png");
  
  stoneImage = loadImage("stone.png");
  

}

function setup(){
  
  createCanvas(400, 400);
  
  ground = createSprite(200,200);
  ground.addImage(groundImage)
  
  survivalTime=0;
  
  monkey = createSprite(50,180,20,50);
  
  monkey.addAnimation("running",monkeyImage);
  
monkey.scale = 0.1;
  
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,370,400,20);
  invisibleGround.visible = false;
  
  ObstacaleGroup = createGroup()
  BanannaGroup = createGroup()
}




function draw() {
  background(220);
  
  
obstacale();
  banana();

   drawSprites();
  
  stroke("white");
textSize(20);
survivalTime=Math.ceil(frameCount/getFrameRate());
text("Survival Time: "+ survivalTime, 100,50);

  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown ("Space")){
    
    monkey.velocityY = -2;

  }
    monkey.velocityY = monkey.velocityY + 0.5
  
  monkey.collide(invisibleGround);
 
  
}

function obstacale() {
  if(frameCount % 60 === 0){
  var rock = createSprite(320,332,20,20);
 rock.addImage(stoneImage);
 rock.velocityX=-8;
 rock.scale=0.15;
    ObstacaleGroup.add(rock);
  }
}

function banana() {
  if(frameCount % 60 === 0){
var banana = createSprite(350,282,20,20);
 banana.addImage(bannanaImage);
 banana.velocityX=-8;
 banana.scale=0.10;
    BanannaGroup.add(banana);
  }
}