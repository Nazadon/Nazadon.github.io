var drawMe = function(x,y,myHeight){
noStroke();
fill(255,224,189);
ellipse(x-(myHeight/150), y-(myHeight/150), (myHeight/150)*94, (myHeight/150)*113);
ellipse(x-(myHeight/150*18),y-(myHeight/150), (myHeight/150)*68, (myHeight/150)*104);
fill(107, 54, 8);
ellipse(x-(myHeight/150*37), y-(myHeight/150*18), (myHeight/150)*10, (myHeight/150)*10);
ellipse(x+(myHeight/150*-3), y-(myHeight/150*18), (myHeight/150)*10, (myHeight/150)*10);

stroke(0,0,0);
fill(255,224,189);
bezier(x-(myHeight/150*24),y+(myHeight/150*7),x-(myHeight/150*52),y+(myHeight/150*6),x-(myHeight/150*62),y+(myHeight/150*12),x-(myHeight/150*29),y-(myHeight/150*8));

fill(255,255,255);

arc(x-(myHeight/150*30),y+(myHeight/150*25),(myHeight/150)*37,(myHeight/150)*13,(myHeight/150)*1,180);

fill(102, 26, 3);
stroke(102, 26, 3);
arc(x-(myHeight/150*35),y-(myHeight/150*27),(myHeight/150)*24,(myHeight/150)*-8,(myHeight/150)*-10,160);

arc(x+(myHeight/150*-3),y-(myHeight/150*26),(myHeight/150)*24,(myHeight/150)*-8,(myHeight/150)*-10,160);

quad(x-(myHeight/150*38),y-(myHeight/150*42),x+(myHeight/150*45),y-(myHeight/150*37),x+(myHeight/150*7),y-(myHeight/150*62),x-(myHeight/150*38),y-(myHeight/150*71));

quad(x+(myHeight/150*1),y-(myHeight/150*43),x+(myHeight/150*47),y-(myHeight/150*11),x+(myHeight/150*45),y-(myHeight/150*42),x+(myHeight/150*10),y-(myHeight/150*61));

fill(0, 0, 0);
rect(x-(myHeight/150*47),y+(myHeight/150*56),(myHeight/150)*85,(myHeight/150)*71);

fill(255,255,255);
textSize((myHeight/150)*43);
text("R",x-(myHeight/150*41),y+(myHeight/150*103));
text("W",x-(myHeight/150*10),y+(myHeight/150*103));
};

/////////////////////////////////////////////////////////////////////////////////////
/////I misread and did the left and right edges in addition to the top//////////////
///////////////////////////////////////////////////////////////////////////////////
   var stillplaying = true;
   
   var draw = function() {
       if (stillplaying)
       {
           background(255, 255,255);
           drawMe(mouseX,mouseY,50);
           if (mouseX === 400 || mouseX < 18 || mouseX > 385) 
           {
               fill(255, 0, 0);
               textSize(24);
                text("Out of Bounds",100,100);
               stillplaying = false;
           }
            if(mouseY === 400 || mouseY === 400 || mouseY < 25){
                fill(255, 0, 0);
               textSize(24);
                text("Out of Bounds",100,100);
               stillplaying = false;
                
               
           }
       }
   };
   //Hit Restart to try again