class Quiz{

    constructor(){
        

    }
getState(){
    database.ref("gameState").on("value",function (data){
        gameState=data.val()
    })
}
update(state){
     database.ref("/").update({
        gameState:state
     })
}

async start(){
    if(gameState===0){
        question=new Question()
    question.display()
    contestant=new Contestant()
 var contestantCountRef=await database.ref("contestantCount").once("value")
        if(contestantCountRef.exists()){
            contestantCount=contestantCountRef.val()
            contestant.getCount()
        }
    }
    
}

    play(){
        question.hide()
           background("yellow")
           fill(0)
           textSize(30)
           text("Result of the Quiz:",350,50)
           text("_____________________",320,65)
            Contestant.getPlayerInfo()
            if(allContestants!==undefined){
                var answerPosition=230
                fill("blue")
                textSize(20)
                text("*NOTE:Contestant Who answered corectly are highlighted in green colour",130,answerPosition)
                for(var plr in allContestants){
                    var correctAns="2"
                    if(allContestants[plr].answer===correctAns){
                        fill("green")

                    }else{
                        fill("red")
                    }

                    answerPosition+=30
                    text(allContestants[plr].name+ " : "+allContestants[plr].answer,250,answerPosition )
                    
                }
            }
           
    }

}

