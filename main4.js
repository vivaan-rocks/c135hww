img = "";
function preload(){ 
    img = loadImage('1623934736833.jpg');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
}
function draw(){
    image(img,0,0,300,300);
    fill("0000ff");
    noFill();
    stroke("0000ff");
    rect(130,130,130,130);
}