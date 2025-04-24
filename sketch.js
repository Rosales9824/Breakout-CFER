var player;
var blocks = [];
var b;
function setup(){
createCanvas(900,600);
player = new Player();
b = new Ball();
for(var i = 0; i < 8; i++)
for(var j = 0; j < 12; j++)
blocks.push(new Block(j*80,i*40));
}

function draw(){
background(0);
player.move();
player.show();
b.move();
for(var i = 0; i < blocks.length; i++){
blocks[i].show();
if(b.collision(blocks[i])){
b.vy = - b.vy;
blocks.splice(i,1);
}

}
if(b.collision(player))
b.vy = - b.vy;
if(b.y < 0)
b.vy = - b.vy;
b.show();
}