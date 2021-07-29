var player;
var enemy1, enemy2,enemy3,enemy4, enemy5;
var playerbullet;
var playerbulletGroup;
var enemyBullet;
var enemyBulletGroup;


function preload() {

backgroundImg = loadImage("images/Spacebg.png");
playerImg = loadImage("images/Playership.png");
playerbulletImg = loadImage("images/Playerbullet.png")
enemyImg = loadImage("images/Enemyship.png");
enemyBulletImg = loadImage("images/Enemybullet.png");

}

function setup() {
  createCanvas(1000,600);

  player = createSprite(500, 525,50,50);
  player.addImage(playerImg);
  player.scale = 0.8;
  
  
  enemy1= createSprite(100,60,50,50);
  enemy1.addImage(enemyImg);
  enemy1.scale = 0.4

  enemy2= createSprite(300, 60,50,50);
  enemy2.addImage(enemyImg);
  enemy2.scale = 0.4


  enemy3= createSprite(500, 60,50,50);
  enemy3.addImage(enemyImg);
  enemy3.scale = 0.4

  enemy4= createSprite(700, 60,50,50);
  enemy4.addImage(enemyImg);
  enemy4.scale = 0.4

  enemy5= createSprite(900, 60,50,50);
  enemy5.addImage(enemyImg);
  enemy5.scale = 0.4
  

playerbulletGroup = new Group();
enemyBulletGroup = new Group();      

player.debug = false;
enemy1.debug = false;
enemy2.debug = false;
enemy3.debug = false;
enemy4.debug = false;
enemy5.debug = false;

player.setCollider("circle",15,25,115);
enemy1.setCollider("circle",15,-50,200);
enemy2.setCollider("circle",15,-50,200);
enemy3.setCollider("circle",15,-50,200);
enemy4.setCollider("circle",15,-50,200);
enemy5.setCollider("circle",15,-50,200);

  

}

function draw() {
  background(backgroundImg);  


if(keyIsDown(LEFT_ARROW)){
  player.x = player.x-5;
}

if(keyIsDown(RIGHT_ARROW)){
  player.x = player.x+5;
}

if(keyDown("space")){
  spawnPlayerBullet();
 
}

if(frameCount% 80==0){
  spawnBullets();
}

if(playerbulletGroup.isTouching(enemy1)){
  enemy1.destroy();
  playerbullet.destroy();
 
}else if(playerbulletGroup.isTouching(enemy2)){
  enemy2.destroy();
  playerbullet.destroy();
  
}else if(playerbulletGroup.isTouching(enemy3)){
  enemy3.destroy();
  playerbullet.destroy();
  
}else if(playerbulletGroup.isTouching(enemy4)){
  enemy4.destroy();
  playerbullet.destroy();
  
}else if(playerbulletGroup.isTouching(enemy5)){
 enemy5.destroy(); 
 playerbullet.destroy();

}

if(enemyBulletGroup.isTouching(player)){
  player.destroy();
  playerbullet.destroy();
  
}

  drawSprites();
}




function spawnBullets(){
  
  var rand = Math.round(random(1,2));
   if(rand==1){
   
   spawnEnemyBullet(enemy1);
   
   spawnEnemyBullet(enemy3);
    
    spawnEnemyBullet(enemy5);
   }

   else if(rand == 2){

   spawnEnemyBullet(enemy2);

    spawnEnemyBullet(enemy4);
    
    spawnEnemyBullet(enemy1);
   }
   
}

function spawnPlayerBullet(){
  if(frameCount % 10 == 0){
  playerbullet = createSprite(player.x,player.y,5,20);
  playerbullet.addImage(playerbulletImg);
  playerbullet.scale=0.2;
  playerbullet.velocityY= -5;
  playerbulletGroup.add(playerbullet);
  }                  
}

function spawnEnemyBullet(enemy){
  enemyBullet = createSprite(enemy.x,enemy.y,5,10);
  enemyBullet.addImage(enemyBulletImg);
  enemyBullet.scale=0.2;
  enemyBullet.velocityX = Math.round(random(-5,8));
  enemyBullet.velocityY = Math.round(random(5,8));
  enemyBulletGroup.add(enemyBullet);
}

function destroyBullet(enemy){
  enemyBulletGroup.destroyEach();
}
