var boyImage,boy,stoneImage,stone;
var ground1;
var slingshot;
var hand;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("boyImage.jpg");
	stoneImage = loadImage("stoneImage.jpg");
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,790,20,20);
	
	boy = createSprite(170,460);
	boy.addImage(boyImage);

    hand = createSprite(96,410,10,10);

	stone = createSprite(96,410);
	stone.addImage(stoneImage);
	stone.scale = 0.15;
	
	 
	hand = createSprite(96,410,10,10);
	
	slingshot= new Slingshot (stone.body,{x:96,y:410}); (slingshot) 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1000);
  
  ground1.display();
  slingshot.display();
  drawSprites();
 
}



