const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
                                                                                      
var engine, world, object, ground;

function setup() {
  createCanvas(700,700);
  engine = Engine.create();
  //createSprite(400, 200, 50, 50);
  world = engine.world;
  var object_options = {
    isStatic: true
  }
  object = Bodies.circle(376,239,50, object_options);

  ground = Bodies.rectangle(350, 650, 700,10,);
}
World.add(world.object);

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  circle(object.position.x,object.position.y,60); //cricel 
  rect(ground.position.x, ground.position.y, 700, 10);
  drawSprites();
}                                                                                                                                    
                                              