var c=document.getElementById("jumbo-arrow");
//c.width  = 42;
//c.height = 42;	
var ctx=c.getContext("2d");
ctx.lineWidth = 2;
ctx.strokeStyle = 'yellow';

 ctx.beginPath();
 ctx.moveTo(0, 0);
 ctx.lineTo(200, 0);
 ctx.arcTo(210, 2, 210, 3, 5);
 ctx.lineTo(210, 20);
 ctx.lineTo(250, 20);
 ctx.lineTo(240, 10);
 ctx.lineTo(250, 20);
 ctx.lineTo(240, 30);
 ctx.stroke();


// var c=document.getElementById("arrow");
// //c.width  = 42;
// //c.height = 42;	
// var ctx=c.getContext("2d");
// ctx.lineWidth = 4;
// ctx.strokeStyle = '#008000';

//  ctx.beginPath();
//  ctx.moveTo(0, 0);
// ctx.lineTo(100, 0);
// ctx.arcTo(110, 2, 110, 5, 15);
// ctx.lineTo(110, 60);
// /* ctx.arcTo(110, 65, 110, 70, 15); */
// ctx.lineTo(200, 60);
// ctx.lineTo(180, 40);
// ctx.lineTo(200, 60);
// ctx.lineTo(180, 80);
// ctx.stroke();