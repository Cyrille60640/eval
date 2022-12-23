//globle variable
let dice = document.getElementById('dice')
let player_select = 1

//class player
class player{
    constructor(round,global){
        this.round=round
        this.global=global

        }
        InitGlobal = ()=>{
            this.round=0
            this.global=0
        }

        InitRound = ()=>{
            this.round=0
            
        }

        AddRound= (value_dice)=>{
            this.round += value_dice
           // console.log(this.round)
        }


        AddGlobal = ()=>{
            this.global += this.round
        }
        
        DisplayRound=()=>{
            console.log(this.round)
        }
    
}

//init class player for 2 players
let player1 = new player(0,0)
let player2 = new player(0,0)


dice.addEventListener('click',()=>{

    //calculate the random number between 1 and 6
    let dice_value = Math.floor(Math.random() * 6) + 1;

    //displays the image corresponding to the calculated value
    dice.src = 'image/dice-' + dice_value + '.png';


    switch(player_select){
        case 1:
            console.log("player1")
            if (dice_value==1){
                console.log("init")
                player1.InitRound()
                player_select=2
            }else{
                console.log("add")
                player1.AddRound(dice_value)
                player1.DisplayRound()
                player2.DisplayRound()
            }
            break

        case 2:
            console.log("player2")
            if (dice_value==1){
                console.log("init")
                player2.InitRound()
                player_select=1
            }else{
                console.log("add")
                player2.AddRound(dice_value)
                player1.DisplayRound()
                player2.DisplayRound()
            }
            break
    }


    

    }

)
