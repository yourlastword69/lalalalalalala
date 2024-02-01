/*get the canvas element using its id and store it in a variable “canvas” so that we can 
manipulate the canvas throughout the js code.*/


//Get rference of canvas created.

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "aqua"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

// Attach canvas and addEventListener with 'mousedown' event.


canvas. addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

//taking color from input box
//additional activity start
color = document.getElementById("color").value;
console. log(color);
//addition activity ends

mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;

console. log("X="+ mouse_x +",Y= " + mouse_y);
circle(mouse_x, mouse_y);
}


function circle(mouse_x , mouse_y)
{
ctx. beginPath();
ctx.strokeStyle = color;
ctx. lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}
//additional activity



	
