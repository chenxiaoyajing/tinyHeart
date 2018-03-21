/*var fruitObj=function()
{
	this.alive=[];
	this.x=[];
	this.y=[];
	this.spd=[];
	this.l=[];
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();
}

fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()*0.017+0.003;
		this.fruitType[i]="";
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
};

fruitObj.prototype.draw=function(){
	for(i=0;i<this.num;i++){
		if(this.alive[i]){
			if(this.fruitType[i]=="blue"){
				var pic=this.bule;
			}
			else
			{
				var pic=this.orange;
			}

			if(this.l[i]<14){
			this.l[i]+=this.spd[i]*deltaTime;
			}
			else
			{
				this.y[i]-=this.spd[i]*7*deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i]<10){
				this.alive[i]=false;
			}
		}
	}
}

fruitObj.prototype.born=function(i){
	var aneID=Math.floor(Math.random()*ane.num);
	this.x[i]=ane.x[aneID];
	this.y[i]=canHeight-ane.len[aneID];
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.2)
	{
		this.fruitType[i]="blue";
	}
	else
	{
		this.fruitType[i]="orange";
	}
}

function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i]) num++;
	}
	if(num<15)
	{
		sendFruit();
		return;
	}
}

function sendFruit(){
	for(var i=0;i<fruit.num;i++)
	{
		if(!fruit.alive[i])
		{
			fruit.born[i];
			return;
		}
	}
}*/


/*var fruitObj=function()
{
	this.alive=[];
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.orange=new Image();
	this.bule=new Image();
	oranges=this.orange;
	bules=this.bule;
}

fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=true;
		this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()*0.01+0.005;
		this.born(i);
	}
	oranges.src="./src/fruit.png";
	bules.src="./src/blue.png";
}

fruitObj.prototype.draw=function()
{
	for(var i=0;i<this.num;i++)
	{
		if(this.alive[i])
		{
			if(this.l[i]<=15){
			this.l[i]+=this.spd[i]*deltaTime;
			}
			else
			{
				this.y[i]-=this.spd[i]*7*deltaTime;
			}
			ctx2.drawImage(this.orange,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i]<10)
			{
				this.alive[i]=false;
			}
		}
		
	}
}

fruitObj.prototype.born=function(i)
{
	var aneID=Math.floor(Math.random()*ane.num);
	this.x[i]=ane.x[aneID];
	this.y[i]=canHeight-ane.len[aneID];
	this.l[i]=0;
}*/

/*var fruitObj=function()
{
	this.alive=[];
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.orange=new Image();
	this.blue=new Image();
}

fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()*0.017+0.003;
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src="./src/blue.png";
}

fruitObj.prototype.draw=function()
{
	for(var i=0;i<this.num;i++)
	{
		if(this.alive[i])
		{
			if(this.l[i]<=15){
			this.l[i]+=this.spd[i]*deltaTime;
			}
			else
			{
				this.y[i]-=this.spd[i]*7*deltaTime;
			}
			ctx2.drawImage(this.orange,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i]<10)
			{
				this.alive[i]=false;
			}
		}
		
	}
}

fruitObj.prototype.born=function(i)
{
	var aneID=Math.floor(Math.random()*ane.num);
	this.x[i]=ane.x[aneID];
	this.y[i]=canHeight-ane.len[aneID];
	this.l[i]=0;
	this.alive[i]=true;
}

function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i]) num++;
	}
	if(num<15){
		sendFruit();
		return;
	}
}

function sendFruit()
{
	for(i=0;i<fruit.num;i++){
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}
	}	
}*/


/*var fruitObj=function()
{
	this.alive=[];
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();
}

fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()*0.017+0.003;
		this.fruitType[i]="";
	}
	this.orange.src="./src/fruit.png";
	this.blue.src="./src/blue.png";
}

fruitObj.prototype.draw=function()
{
	for(var i=0;i<this.num;i++)
	{
		var pic;
		if(this.alive[i])
		{
			if(this.fruitType[i]=="blue")
			{
				pic=this.blue;
			}
			else
			{
				pic=this.orange;
			}

			if(this.l[i]<=15){
			this.l[i]+=this.spd[i]*deltaTime;
			}
			else
			{
				this.y[i]-=this.spd[i]*7*deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i]<10)
			{
				this.alive[i]=false;
			}
		}
		
	}
}

fruitObj.prototype.born=function(i)
{
	var aneID=Math.floor(Math.random()*ane.num);
	this.x[i]=ane.x[aneID];
	this.y[i]=canHeight-ane.len[aneID];
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.2)
	{
		this.fruitType[i]="blue";
	}
	else
	{
		this.fruitType[i]="orange";
	}
}

function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i]) num++;
	}
	if(num<15){
		sendFruit();
		return;
	}
}

function sendFruit()
{
	for(i=0;i<fruit.num;i++){
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}
	}	
}*/

var fruitObj=function()
{
	this.alive=[];
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();
}

fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()*0.017+0.003;
		this.fruitType[i]="";
	}
	this.orange.src="./src/fruit.png";
	this.blue.src="./src/blue.png";
}

fruitObj.prototype.draw=function()
{
	for(var i=0;i<this.num;i++)
	{
		var pic;
		if(this.alive[i])
		{
			if(this.fruitType[i]=="blue")
			{
				pic=this.blue;
			}
			else
			{
				pic=this.orange;
			}

			if(this.l[i]<=15){
			this.l[i]+=this.spd[i]*deltaTime;
			}
			else
			{
				this.y[i]-=this.spd[i]*7*deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i]<10)
			{
				this.alive[i]=false;
			}
		}
		
	}
}

fruitObj.prototype.born=function(i)
{
	var aneID=Math.floor(Math.random()*ane.num);
	this.x[i]=ane.x[aneID];
	this.y[i]=canHeight-ane.len[aneID];
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.2)
	{
		this.fruitType[i]="blue";
	}
	else
	{
		this.fruitType[i]="orange";
	}
}

fruitObj.prototype.dead=function(i)
{
	this.alive[i]=false;
}

function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i]) num++;
	}
	if(num<15){
		sendFruit();
		return;
	}
}

function sendFruit()
{
	for(i=0;i<fruit.num;i++){
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}
	}	
}