var hangman;
var stand;
var chance;
var newWord; 
var wordArr = []; 
var correctArr= []; 
var isCorrect;
var index;
function setup() {
  createCanvas(400, 400);
  stand = new Stand(); 
  chance = new Chance();
  newWord = chance.word({length: random(5 ,8)});
  wordArr = split(newWord, ""); 
  hangman = new Hangman(); 
  isCorrect = true; 
  index = 0;
  for(var i =0; i < wordArr.length; i++ ){
    correctArr.splice(i , 0 , "-");
}
}

function draw() {
  background(220);
  textSize(10); 
  text("Click to reset hangman", 250, height - 50); 
  stand.show(); 
  for(var j = 0; j < correctArr.length;j++){
    textSize(26); 
      fill(0);
    text(correctArr[j],50+(20 * j), 350); 
  }
  hangman.show(); 
  if(hangman.wrongCount >= 7){
    textSize(10); 
      text("You lose, you get nothing, good day sir" , width/2, 100);
  }
}


function Stand(){
  this.x=width/2;
  this.y = width/2 -100;
this.show = function(){
    noFill(); 
    line(this.x, this.y-25, this.x, this.y -50);
    line(this.x, this.y - 50, this.x - 100, this.y - 50);
    line(this.x -100, this.y -50, this.x -100, this.y +200); 
    line(this.x - 125 , this.y +200, this.x -75, this.y +200); 
    }
}
function Hangman(){
    this.wrongCount = 0; 
  this.show = function(){
    switch(this.wrongCount){
    case 1:
      fill(0); 
      ellipse(width/2, height/2 -100, 50,50);
      break;
    case 2:
    fill(0); 
      ellipse(width/2, height/2 -100, 50,50);
      line(width/2, height/2 -75, width/2, height/2+25);
      break;
    case 3:
    fill(0); 
      ellipse(width/2, height/2 -100, 50,50);
      line(width/2, height/2 -75, width/2, height/2+25);
      line(width/2, height/2 -25, width/2 + 50, height/2 -75);
      break;
    case 4:
    fill(0); 
    ellipse(width/2, height/2 -100, 50,50);
    line(width/2, height/2 -75, width/2, height/2+25);
    line(width/2, height/2 -25, width/2 + 50, height/2 -75);
      line(width/2, height/2 -25, width/2 - 50, height/2 -75);
      break; 
    case 5:
    fill(0); 
    ellipse(width/2, height/2 -100, 50,50);
    line(width/2, height/2 -75, width/2, height/2+25);
    line(width/2, height/2 -25, width/2 + 50, height/2 -75);
      line(width/2, height/2 -25, width/2 - 50, height/2 -75);
      line(width/2, height/2 +25, width/2 +50, height/2+75);
      break;
    case 6:
    fill(0); 
    ellipse(width/2, height/2 -100, 50,50);
    line(width/2, height/2 -75, width/2, height/2+25);
    line(width/2, height/2 -25, width/2 + 50, height/2 -75);
      line(width/2, height/2 -25, width/2 - 50, height/2 -75);
      line(width/2, height/2 +25, width/2 +50, height/2+75);
      line(width/2, height/2 +25, width/2 -50, height/2+75);
      break; 
  }
  }
}
function keyPressed(){
    if(keyIsPressed === true){
 for(var i = 0; i < wordArr.length; i++){
    if(key === wordArr[i]){
     index = wordArr.indexOf(key);
     console.log(index);  
      correctArr.splice(index,1,key); 
      isCorrect = true; 
    }else if (!(key === wordArr[i])){
    isCorrect = false; 
    }
  }
  if(wordArr.indexOf(key) == -1 && isCorrect === false){
    hangman.wrongCount++;
  }
}
}
function reset(){
    correctArr = []; 
    wordArr = []; 
    chance = new Chance();
  newWord = chance.word({length: random(5 ,8)});
  wordArr = split(newWord, ""); 
  hangman = new Hangman(); 
  isCorrect = true; 
  index = 0;
  for(var i =0; i < wordArr.length; i++ ){
    correctArr.splice(i , 0 , "-");
}
}
function mouseClicked(){
    reset(); 
}