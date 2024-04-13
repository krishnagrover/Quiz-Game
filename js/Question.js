class Question {
    constructor(){
        this.title=createElement("h1")
        this.input1=createInput("Enter Your Name...")
        this.input2=createInput("Enter Correct Option No.")
        this.button=createButton("Submit")
        this.question=createElement("h3")
        this.option1=createElement("h4")
        this.option2=createElement("h4")
        this.option3=createElement("h4")
        this.option4=createElement("h4")
        this.message=createElement("h2")
        this.resetButton=createButton("reset")

    }
    hide(){
        this.title.hide()
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
}
    display(){
        this.title.html("My Quiz Game")
        this.title.position(350,0)
        this.question.html("Question:-What Starts and ends with the letter 'E', but has only one letter?")
        this.question.position(150,80)
        this.option1.html("1.Everyone")
        this.option1.position(150,100)
        this.option2.html("2.Envelope")
        this.option2.position(150,120)
        this.option3.html("3.Estimate")
        this.option3.position(150,140)
        this.option4.html("4.Example")
        this.option4.position(150,160)
        this.input1.position(150,230)
        this.input2.position(350,230)
        this.button.position(300,300)
        this.resetButton.class("Reset Button")
        this.resetButton.position(width/2+300,20)
        this.handleResetButton()

        this.button.mousePressed(()=>{
            this.title.hide()
            this.input1.hide()
            this.input2.hide()
            this.button.hide()
            contestant.name=this.input1.value()
            contestant.answer=this.input2.value()
            contestantCount+=1
            contestant.updateCount(contestantCount)
            contestant.index=contestantCount
            contestant.update()
        })
    }

    handleResetButton(){
        this.resetButton.mousePreseed(()=>{
            database.ref("/").set({
                gameState:0,
                contestantCount:0,
                contestants:{}
            
            })
                window.location.reload()
            
        })
    }

}