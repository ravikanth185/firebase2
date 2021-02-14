class Game{
    constructor(){
        
    }
    getstate(){
        var gamestateref=database.ref("gamestate")
        gamestateref.on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gamestate:state
        })
    }
    start(){
        if (gamestate===0){
            player= new Player()
            player.getcount()
            form= new Form()
            form.display()

        }
        car1= createSprite(100,200,20,20)
        car2=createSprite(200,200,20,20)
        car3= createSprite(300,200,20,20)
        car4= createSprite(400,200,20,20)
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
   // text("gamestart",120,100)
        Player.getplayerinfo()
        console.log(allplayers)
        console.log(player)
var displayposition=130;
var pos=0
var x=0,y

for(var plr in allplayers){
    pos=pos+1
    x=x+100
    console.log(displayHeight
        )
        console.log(allplayers[plr].distance)
    y=displayHeight-allplayers[plr].distance
    cars[pos-1].x=x
    cars[pos-1].y=y
    //text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayposition)
    displayposition+=20
    if(plr==="player"+player.index){
        console.log(plr)
        fill("red")
        
        }
        else {
            fill("black")

    }
    if(keyIsDown(UP_ARROW)&&player.index!=null)  {
        player.distance+=50
        player.update()
        
    }
    drawSprites() 
}

    }

}


