var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var ane;
var fruit;
var mom;
var baby;

var mx;
var my;

/*var babyTail=[];*/

var lastTime;
var deltaTime;
var bgPic = new Image();

document.body.onload=game;
function game()
{
	init();
	lastTime=Date.now();
	deltatime=0;
	gameloop();
}

function init() {
	can1 = document.getElementById("canvas1");  //fish, dust,UI,circle
	ctx1 = can1.getContext("2d");
	can2 = document.getElementById("canvas2");  //background,fruit,haikui
	ctx2 = can2.getContext("2d");

	can1.addEventListener('mousemove',onMouseMove,false);

	bgPic.src="./src/background.jpg";

	canWidth=can1.width;
	canHeight=can1.height;

	ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom=new momObj();
    mom.init();

    baby=new babyObj();
    baby.init();

    mx=canWidth*0.5;
    my=canHeight*0.5;

    /*for(i=0;i<8;i++)
    {
    	babyTail=new Image();
    	babyTail.src="./src/babyTail" + i + ".png"
    }*/
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>40) deltaTime=40;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	momFruitsCollision();

	baby.draw();
}

function onMouseMove(e)
{
	if(e.offSetX || e.layerX)
	{
		mx=e.offSetX==undefined?e.layerX: e.offSetX;
		my=e.offSetY==undefined?e.layerY: e.offSetY;
	}
}