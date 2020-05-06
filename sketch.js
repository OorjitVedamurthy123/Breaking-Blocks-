const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constrained = Matter.Constraint;

var engine, world;
var ball;
var ground;
var obstacle;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;
var obstacle7;





function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    
   
    ball = new Ball(200,300);
    hold = new Hold(ball.body,{x:190,y:320});
    ground = new Ground(600,height,1550,5);
    obstacle = new Obstacle(800,550,70,70,PI/2);
    obstacle2 = new Obstacle(900,550,70,70,PI/2);
    obstacle3 = new Obstacle(1000,550,70,70,PI/2);
    obstacle4 = new Obstacle(1100,550,70,70,PI/2);
    obstacle5 = new Obstacle(850,450,70,70,PI/2);
    obstacle6 = new Obstacle(950,450,70,70,PI/2);
    obstacle7 = new Obstacle(1050,450,70,70,PI/2);
    obstacle8 = new Obstacle(900,350,70,70,PI/2);
    obstacle9 = new Obstacle(1000,350,70,70,PI/2);
    obstacle10 = new Obstacle(950,250,70,70,PI/2);
    ground2 = new Ground(1100,180,250,5);
    obstacle11 = new Obstacle(1028,160,50,50,PI/2);
    obstacle12 = new Obstacle(1090,160,50,50,PI/2);
    obstacle13 = new Obstacle(1150,160,50,50,PI/2);
    obstacle14 = new Obstacle(1063,110,50,50,PI/2);
    obstacle15 = new Obstacle(1123,110,50,50,PI/2);
    obstacle16 = new Obstacle(1093,60,50,50,PI/2);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
   
   
    ball.display();
    
    hold.display();
    ground.display();
    obstacle.display();
    obstacle2.display();
    obstacle3.display();
    obstacle4.display();
    obstacle5.display();
    obstacle6.display();
    obstacle7.display();
    obstacle8.display();
    obstacle9.display();
    obstacle10.display();
    ground2.display();
    obstacle11.display();
    obstacle12.display();
    obstacle13.display();
    obstacle14.display();
    obstacle15.display();
    obstacle16.display();

    
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    hold.fly();
}