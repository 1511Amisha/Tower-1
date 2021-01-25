const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon_image;
var ball;

function preload(){
  polygon_image=loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,1000);
  var  engine =Engine.create();
    world = engine.world;

    //create the bodies here
    ground=new Ground(200,100,1000,30);
    sling=new Slingshot(200,100);
    box1=new Box(270,275);
    box2=new Box(330,275);
    box3=new Box(360,275);
    box4=new Box(390,275);
    box5=new Box(420,275);
    box6=new Box(450,275);
    box7=new Box(480,275);
    box8=new Box(330,235);
    box9=new Box(360,235);
    box10=new Box(390,235);
    box11=new Box(420,235);
    box12=new Box(450,235);
    box13=new Box(360,195);
    box14=new Box(390,195);
    box15=new Box(420,195);
    box16=new Box(390,155);

    ball=Bodies.circle(50,100,20);
   World.add(world,ball);
   
    Engine.run(engine);

    

}

function draw(){
    rectMode(CENTER);
    background(0);
    imageMode(CENTER);
    image(polygon_image,ball.position.x,ball.position.y,40,40)


    ground.display();
    sling.display();
    box1.display();
    box2.display();
    box3.display();
    box14.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    drawSprites();


}





