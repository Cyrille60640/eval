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
        }

        AddGlobal = ()=>{
            this.global += this.round
        }
    
}

//globle variable
const dice = document.getElementById('dice')
const btn_NewGame = document.getElementById('btn_NewGame')
const btn_RollDice =document.getElementById('btn_RollDice')
const btn_Hold =document.getElementById('btn_Hold')


let player_select = 1



//init class player for 2 players
let player1 = new player(0,0)
let player2 = new player(0,0)

init()

btn_Hold.addEventListener('click',()=>{
    switch(player_select){
        case 1:
            player1.AddGlobal()
            document.querySelector(".player"+ player_select +"_global").textContent = player1.global
            player1.InitRound()
            document.querySelector(".player1_round").textContent=player1.round
            player_select=2
            break
        case 2:
            player2.AddGlobal()
            document.querySelector(".player"+ player_select +"_global").textContent = player2.global
            player2.InitRound()
            document.querySelector(".player2_round").textContent=player2.round
            player_select=1
            break
    }
})

btn_RollDice.addEventListener('click',()=>{
    
    //calculate the random number between 1 and 6
    let dice_value = Math.floor(Math.random() * 6) + 1

    //displays the image corresponding to the calculated value
    dice.src = 'image/dice-' + dice_value + '.png'

    switch(player_select){
        case 1:
            if (dice_value==1){
                player1.InitRound()
                document.querySelector(".player1_round").textContent=player1.round
                player_select=2
            }else{
                player1.AddRound(dice_value)
            }
            document.querySelector(".player"+ player_select +"_round").textContent = player1.round
            break

        case 2:
            if (dice_value==1){
                player2.InitRound()
                document.querySelector(".player2_round").textContent=player2.round
                player_select=1
            }else{
                player2.AddRound(dice_value)
            }
            document.querySelector(".player"+ player_select +"_round").textContent = player2.round
            break
    }

})

// Listner button  New Game
btn_NewGame.addEventListener('click',()=>{
    // init value round and global 
    init()
}
)

function init(){
    player1.InitGlobal()
    player2.InitGlobal()
    document.querySelector(".player1_round").textContent = 0
    document.querySelector(".player2_round").textContent = 0
    document.querySelector(".player1_global").textContent =0
    document.querySelector(".player2_global").textContent =0
}