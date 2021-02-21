canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var status = "";

car1_x=10;
car1_y=160;
car1="Car_1.png";




car2_x=10;
car2_y=340;
car2="Car_2.png";




car_height=90;
car_width=150;

background_img="road.gif";


car2="Car_2.png";

function add(){

    background_imgTag=new Image();
    background_imgTag.onload=uploadbackround;
    background_imgTag.src=background_img;


    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar;
    car1_imgTag.src=car1; 

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar;
    car2_imgTag.src=car2; 
}





function uploadcar(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car_width,car_height);
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car_width,car_height);
}




function uploadbackround(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}



window.addEventListener("keydown",my_keydown);
function my_keydown(e){
  
  
  keyPressed=e.keyCode;
  console.log(keyPressed);

  if(keyPressed == '37') {
    car_1_left();
    console.log("left 1"); 
  }

  if(keyPressed == '39') {
    car_1_right();
    console.log("right 1"); 
  }
//car 2 key pressed starts here//
     
  if(keyPressed == '65') {
    car_2_left();
    console.log("left 2"); 
  }
  
  if( keyPressed == '68') {
    car_2_right();
    console.log("right 2"); 
  }


  if (car1_x > 650) {
    console.log("Car 1 won!");
    status = "Car 1 won!";
    console.log(status);
    document.getElementById("game_status").innerHTML= status;
    document.getElementById("game_status").innerHTML= "Car 1 won!";

  }


  if (car2_x > 650) {
    console.log(status);
    status = "Car 2 won!"
    console.log("Car 2 won!!");
    document.getElementById("game_status").innerHTML= status;
    document.getElementById("game_status").innerHTML= "Car 2 won!!";

  }


}


   function car_1_left() {
    if(car1_x >=0) {
      car1_x = car1_x - 10;
      uploadbackround();
      uploadcar();
    } 
   }

   function car_1_right() {
    if(car1_x <=650) {
      car1_x = car1_x + 10;
      uploadbackround();
      uploadcar();
    } 
  }
    

      function car_2_left() {
       if(car2_x >=0) {
       car2_x = car2_x - 10;
       uploadbackround();
       uploadcar();
       } 
      }

      function car_2_right() {
       if(car2_x <=650) {
       car2_x = car2_x + 10;
       uploadbackround();
       uploadcar();
       } 
       
      }

