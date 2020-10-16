
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject= new Roof(150,50,1100,20)
bobObject1= new Bob(200,200,50)
bobObject2= new Bob(400,200,50)
bobObject3= new Bob(600,200,50)
bobObject4= new Bob(800,200,50)
bobObject5= new Bob(1000,200,50)
rope1=new rope(bobObject1.body,roofObject.body,bobDiameter2,0) 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



