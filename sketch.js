var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(1366,653);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, packageBody);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {

	var groundSprite_options = {
        isStatic: true 
    }

    //Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,groundSprite_options);
	World.add(world, ground);

	ground = Bodies.rectangle(width/1, 650, width, 10 ,groundSprite_options);
	World.add(world, ground);

	var packageSprite_options = {
        restitution:0.6
    }

	packageBody = Bodies.circle(width/2,200,20,packageSprite_options);
    World.add(world,packageBody);
}  
}