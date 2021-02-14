class Form{
    constructor(){
      this.input=createInput("name")
      this.button =createButton("play")
      this.greeting =createElement("h3")
    }
display(){
  
  this.input.position(displayWidth/2,displayHeight/2-40)
  this.button.position(displayWidth/2,displayHeight/2)
  this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    playercount+=1
    player.index=playercount
  player.updatecount(playercount)
    player.update()
    this.greeting.html("hello "+player.name)
    this.greeting.position(displayWidth/2,displayHeight/2)
  })
}
hide(){
  this.input.hide()
  this.button.hide()
  this.greeting.hide()
  
}
}
  







































