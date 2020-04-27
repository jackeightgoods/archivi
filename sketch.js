let roboto;
  let bs;
let sito;
function preload() {
roboto_bl =loadFont('assets/Roboto-Black.ttf');
roboto_r = loadFont('assets/Roboto-Regular.ttf')
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255,0,0,20);
bs =new Button(windowWidth/2,2/5*windowHeight+100,'SITO',125);

}

function draw() {
home();

}

function home (){

  clear();
  background(255,0,0,50);
  textFont(roboto_bl);
  textSize(windowHeight*1/10);
  textAlign(CENTER);
  text('QUIZ \n Manifesti',windowWidth/2,windowHeight*1/5);
  rectMode(CENTER);
  noStroke();

  button = createButton('click me');
    button.position(windowWidth/2,2/5*windowHeight+100);
  //bs.show();


//  c.addEventListener('click', event => {window.open("https://www.w3schools.com")});
/* bs = button(windowWidth/2,2/5*windowHeight+100,'SITO');

bs.onclick = function(){window.open("https://www.w3schools.com")};
button(windowWidth/2,2/5*windowHeight+180,'Inizia il quiz');*/

}
function mousePressed(){
bs.clicked(mouseX,mouseY,clear());
console.log('caidoasd');
}

class Button {
  constructor(xb,yb,t,c) {
    this.c='#fffff';
    this.x=xb;
    this.y=yb;
    this.t=t

  }
  show (){
    rectMode(CENTER);
    noStroke();
    fill(this.c);
    rect(this.x,this.y,1/1.2*windowWidth,40,50,50,50,50)
    textAlign(CENTER);
    textFont(roboto_r);
    textSize(30);
    fill(0);
    text(this.t,this.x,this.y+10);

  }
  clicked(mx,my,callaback){
    if (my <this.y+20 && my > this.y -20 && mx> this.x -((1/1.2*windowWidth)/2)&& mx< this.x + ((1/1.2*windowWidth)/2)) {
      callback;
    }
    console.log('click');
  }


}
