canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_height = 90;
rover_width = 100;

rover_x = 50;
rover_y = 50;
mars_img_array = ["img_1.jpeg", "img_2.jpg", "img_3.jpg","img_4.jpg", "img_5.jpg"];

random_number = Math.floor(Math.random()*4);

background_img = mars_img_array[random_number];
rover_img = "rover.png";

function add() {
    backgroundimg_tag = new Image();
    backgroundimg_tag.onload = uploadbackground();
    backgroundimg_tag.src = background_img;

    roverimg_tag = new Image();
    roverimg_tag.onload = uploadrover();
    roverimg_tag.src = rover_img;
}

function uploadbackground() {
    ctx.drawImage(backgroundimg_tag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(roverimg_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keyPress = e.keyCode;

    if(keyPress == '38') {
        up();
        console.log("up");
    }

    if(keyPress == '40') {
        down();
        console.log("down");
    }
    if(keyPress == '37') {
        left();
        console.log("left");
    }

    if(keyPress == '39') {
        right();
        console.log("right");
    }
}

function up(){

    if(rover_y>=0){
        rover_y = rover_y - 10;
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=400){
        rover_y = rover_y + 10;
        uploadbackground();
        uploadrover(); 
    }
}

function left(){

    if(rover_x>=0){
        rover_x = rover_x - 10;
        uploadbackground();
        uploadrover();
    }
}

function right(){

    if(rover_x<=700){
        rover_x = rover_x + 10;
        uploadbackground();
        uploadrover();
    }
}


