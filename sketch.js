
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
  roof= new Roof(550,200,500,20);
  bob1= new Bob(375,400);
  bob2= new Bob(460,400);
  bob3= new Bob(545,400);
  bob4= new Bob(630,400);
  bob5= new Bob(715,400);
  
  chain = new Chain(this.body, connectedlog.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}



