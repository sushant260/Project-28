
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone, boyImg, ground, tree, m1, m2, m3, m4, m5, m6, m7
var m8, m9, m10, m11, m12, launcher1, score = 0,count=0;
function preload() {
	boyImg = loadImage("images/images/boy.png")
}

function setup() {
	createCanvas(1200, 1000);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(110, 830, 100, 100);
	ground = new Ground(400, 1000, 1600, 20);
	tree = new Tree(800, 700, 700, 700);
	m1 = new Mango(690, 480, 70, 70);
	m2 = new Mango(770, 540, 60, 60);
	m3 = new Mango(830, 620, 80, 80);
	m4 = new Mango(930, 490, 60, 60);
	m5 = new Mango(530, 560, 70, 70);
	m6 = new Mango(950, 630, 70, 70);
	m7 = new Mango(970, 640, 60, 60);
	m8 = new Mango(630, 580, 80, 80);
	m9 = new Mango(530, 650, 60, 60);
	m10 = new Mango(660, 470, 70, 70);
	m11 = new Mango(930, 550, 60, 60);
	m12 = new Mango(860, 480, 70, 70);
	launcher1 = new launcher(stone.body, { x: 110, y: 830 })
	Engine.run(engine);
  score=0
}


function draw() {
	rectMode(CENTER);
	background("skyBlue");

	textSize(25);
    fill("green")
	text("PRESS UP ARROW TO GET ANOTHER CHANCE TO PLAY",50 ,50);
	textSize(35);
    fill("black")
    text("score="+score,50 ,200);
	image(boyImg, 80, 770, 200, 300);
	ground.display();
	tree.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	m9.display();
	m10.display();
	m11.display();
	m12.display();
	stone.display();
	launcher1.display();
	detectollision(stone, m1);
	detectollision(stone, m2);
	detectollision(stone, m3);
	detectollision(stone, m4);
	detectollision(stone, m5);
	detectollision(stone, m6);
	detectollision(stone, m7);
	detectollision(stone, m8);
	detectollision(stone, m9);
	detectollision(stone, m10);
	detectollision(stone, m11);
	detectollision(stone, m12);
}
function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
	launcher1.fly();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.setPosition(stone.body, { x: 110, y: 830 })
		launcher1.attach(stone.body);
		score=0
		
	}
}
function detectollision(lstone, lmango) {
	MangoBodyPosition = lmango.body.position
	StoneBodyPosition = lstone.body.position

	var distance = dist(StoneBodyPosition.x, StoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)

	if (distance <= lmango.width + lstone.width) {
		Matter.Body.setStatic(lmango.body, false);
		score = score + 1;
		count=count+1;
		
	}
}
