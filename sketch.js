
var start = 0;
var xCenter = 250;
var yCenter = 350;
var xChange = 1;


function setup() {
 createCanvas(600,600);
frameRate(27);
}
function draw() {
  background(255,30,120);


   xCenter = mouseX;
   yCenter = mouseY;
   
 //shadow
 fill(232,232,232);
stroke(255,255,255);
 ellipse(305,295,300,300);

//eye bulb 
  fill(255,255,255);
  ellipse(300,300,300,300);
  
  
  /*if (start >= 60){
  yCenter = yCenter -xChange;
  xCenter = xCenter +xChange;
 
  if(yCenter<280 || yCenter>351){
    xChange = -xChange; 
    
}
}*/
  //Min and Max Y axis
  if(yCenter<270 ){
    yCenter = 270;
  }
  if (yCenter>351){
    yCenter = 350;
  }
  //Min and Max x axis
  if(xCenter<240 ){
    xCenter = 240;
  }
  if (xCenter>330){
    xCenter = 330;
  }
  
  //iris
  fill(100,0,225);
  ellipse(xCenter,yCenter,114,120);

 //pupil
  stroke(0);
  fill(0,0,0);
  ellipse(xCenter-1,yCenter+3,50,54);
 
 //reflection
 colorMode(RGB,255,255,255,1);
  fill(225,225,225,0.5);
 stroke(225,225,225,0.3);
 quad(xCenter+13,yCenter-4,xCenter+25,yCenter-30,xCenter+50,yCenter-30,xCenter+34,yCenter-10); 

start = start +1;  
}
