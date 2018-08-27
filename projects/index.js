//make the canvas as big as the screen

var c = document.getElementById("game");
		c.width = window.innerWidth - 20;
		c.height = window.innerHeight - 20;
		
var ctx = c.getContext("2d");
var stage = 0;
		
//background color
ctx.fillStyle = "#FF8C00";
ctx.fillRect(0,0,c.width,c.height);
		
//initial text
ctx.fillStyle = "#000000";
ctx.font = "30px Arial";
ctx.fillText("Hello.",250,200);

ctx.moveTo(0,c.height);
ctx.lineTo(c.width,0);
ctx.stroke();

//create triangle 
ctx.beginPath();
ctx.moveTo(0,50);
ctx.lineTo(0,0);
ctx.lineTo(50,0);
ctx.closePath();
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.stroke();
ctx.fill();

function clicked(event){
	if{event.clientX >= 0 && event.clientY >= 0 && event.clientX <= 50 && event.clientY <= 50){
		
	}
}