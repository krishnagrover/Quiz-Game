var canvas
var contestant,quiz,question
var gameState=0
var contestantCount
var database
var answer
var allContestants


function setup(){
    database=firebase.database()
canvas=createCanvas(850,400)
quiz=new Quiz()
quiz.getState()
quiz.start()
}


function draw(){
background("pink")
if(contestantCount===2){
    quiz.update(1)
}

    if(gameState==1){
         clear()
         quiz.play()
    }
     
}