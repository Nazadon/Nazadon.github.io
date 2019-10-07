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







fill(0, 0, 0);
textSize(16);
var questionNumber = round(random(0.5,3.4));

if (questionNumber === 1)
  {
    text("What color is my hair?", 30,100);
    text("A) Brown", 30,120);
    text("B) Blonde", 30,140);
    text("C) Black", 30,160);
   
  }
else if (questionNumber === 2)
  {
    text("What color is my Shirt?", 30,100);
    text("A) Blue", 30,120);
    text("B) Red", 30,140);
    text("C) Black", 30,160);
   
  }
else
  {
    text("What are my Initials?", 30,100);
    text("A) WR", 30,120);
    text("B) RW", 30,140);
    text("C) RX", 30,160);
  }


{

   if (questionNumber === 1)

    {

          var mouseClicked = function ()
    {
        fill(0,0,0);
        textSize(14);
        
        if ( mouseY > 110 && mouseY < 125 && mouseX >50 && mouseX < 100)
        {
               text("A is Correct",50,200);
        }
          if ( mouseY > 130 && mouseY < 145 && mouseX >50 && mouseX < 100)
        {
               text("B is Incorrect",50,200);
        }
          if ( mouseY > 150 && mouseY < 165 && mouseX >50 && mouseX < 100)
        {
               text("C is incorrect",50,200);
        }
    };

    }

 if (questionNumber === 2)

    {

          var mouseClicked = function ()
    {
        fill(0,0,0);
        textSize(14);
        
        if ( mouseY > 110 && mouseY < 125 && mouseX >50 && mouseX < 100)
        {
               text("A is Incorrect",50,200);
        }
          if ( mouseY > 130 && mouseY < 145 && mouseX >50 && mouseX < 100)
        {
               text("B is Incorrect",50,200);
        }
          if ( mouseY > 150 && mouseY < 165 && mouseX >50 && mouseX < 100)
        {
               text("C is Correct",50,200);
        }
    };

    }

 if (questionNumber === 3)

    {

          var mouseClicked = function ()
    {
        fill(0,0,0);
        textSize(14);
        
        if ( mouseY > 110 && mouseY < 125 && mouseX >50 && mouseX < 100)
        {
               text("A is Incorrect",50,200);
        }
          if ( mouseY > 130 && mouseY < 145 && mouseX >50 && mouseX < 100)
        {
               text("B is Correct",50,200);
        }
          if ( mouseY > 150 && mouseY < 165 && mouseX >50 && mouseX < 100)
        {
               text("C is Incorrect",50,200);
        }
    };

    }
}



draw = function() {
fill(0,0,0);
textSize(20);
text("Ryan's Bitmoji Quiz",226,22);
drawMe(345, 106, 150);

};

