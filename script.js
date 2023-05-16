//class player
class player{

    constructor(round,global){
        this.round=round //variable score round 
        this.global=global // variable score total

        }
        //init all variable
        InitGlobal = ()=>{
            this.round=0
            this.global=0
        }

        //init round variable
        InitRound = ()=>{
            this.round=0
        }

        //addition round variable
        AddRound= (value_dice)=>{
            this.round += value_dice
        }

        //addition score total
        AddGlobal = ()=>{
            this.global += this.round
        }
}

//variable document
const dice = document.getElementById('dice')
const btn_NewGame = document.getElementById('btn_NewGame')
const btn_RollDice =document.getElementById('btn_RollDice')
const btn_Hold =document.getElementById('btn_Hold')

// init player 1
let player_select = 1

//init class player for 2 players
let player1 = new player(0,0)
let player2 = new player(0,0)

//init game
init()


//Event click button Hold 
btn_Hold.addEventListener('click',()=>{
    //depending on the player
    switch(player_select){
        case 1: //player1
            player1.AddGlobal() //calcul total score
            document.querySelector(".player"+ player_select +"_global").textContent = player1.global //display total socore
            // if total >= 100 so player win
            if (player1.global >=100){
                add_Winner()
            }
            // else player2 play
            else {
                player1.InitRound() // init round score player1
                document.querySelector(".player1_round").textContent=player1.round // display round score
                player_select=2 // player 2 
                // add & remove class active_player
                document.querySelector(".player1-panel").classList.remove('active_player') 
                document.querySelector(".player2-panel").classList.add('active_player')
            }
            break
        case 2://player1
            player2.AddGlobal()//calcul total score
            document.querySelector(".player"+ player_select +"_global").textContent = player2.global//display total socore
            // if total >= 100 so player win
            if (player2.global >=100){
                add_Winner()
            }
            // else player1 play
            else {
                player2.InitRound()// init round score player2
                document.querySelector(".player2_round").textContent=player2.round// display round score
                player_select=1// player 1
                // add & remove class active_player
                document.querySelector(".player1-panel").classList.add('active_player')
                document.querySelector(".player2-panel").classList.remove('active_player')
            }

            break
    }
})

//Event click button RollDice
btn_RollDice.addEventListener('click',()=>{
    
    //calculate the random number between 1 and 6
    let dice_value = Math.floor(Math.random() * 6) + 1

    //displays the image corresponding to the calculated value
    dice.src = 'image/dice-' + dice_value + '.png'

    //depending on the player
    switch(player_select){
        case 1: //player1
            // if dice value = 1 so  hand over to the other player and lose the points
            if (dice_value==1){
                player1.InitRound() // init score round
                document.querySelector(".player1_round").textContent=player1.round //display score round
                player_select=2 // player 2
                // add & remove class active_player
                document.querySelector(".player1-panel").classList.remove('active_player')
                document.querySelector(".player2-panel").classList.add('active_player')
            }
            // else addition score round
            else{
                player1.AddRound(dice_value)
            }
            document.querySelector(".player"+ player_select +"_round").textContent = player1.round //display score round
            break

        case 2://player2
            // if dice value = 1 so  hand over to the other player and lose the points
            if (dice_value==1){
                player2.InitRound()// init score round
                document.querySelector(".player2_round").textContent=player2.round//display score round
                player_select=1 // player 1
                // add & remove class active_player
                document.querySelector(".player1-panel").classList.add('active_player')
                document.querySelector(".player2-panel").classList.remove('active_player')
            }
            // else addition score round
            else{
                player2.AddRound(dice_value)
            }
            document.querySelector(".player"+ player_select +"_round").textContent = player2.round
            break
    }

})

// Event click button NewGame
btn_NewGame.addEventListener('click',()=>{
    // init value round and global 
    init()
}
)

//function init game
function init(){
    player1.InitGlobal()  //init total player1
    player2.InitGlobal() //init total player2
    btn_Hold.disabled=false //enable button hlod
    btn_RollDice.disabled=false //enable button rolldive
    //init display
    document.querySelector(".player1_round").textContent = 0
    document.querySelector(".player2_round").textContent = 0
    document.querySelector(".player1_global").textContent =0
    document.querySelector(".player2_global").textContent =0
    document.querySelector(".player1-panel").classList.add('active_player')
    document.querySelector(".player2-panel").classList.remove('active_player')

    //if div id=winner exists then we delete the div and remove class "win_player"
    if (document.getElementById('winner')!=null){
        document.getElementById('winner').remove()
        document.querySelector(".player1-panel").classList.remove('win_player')
        document.querySelector(".player2-panel").classList.remove('win_player')
    }
    
}

//function allowing to add a div to display the winning player
function add_Winner () {
    
    //create div winner
    let div_winner = document.createElement('div');
    div_winner.id='winner'
    div_winner.innerHTML = 'WINNER!';

    //add new div at DOM after player name active
    document.querySelector(".player"+ player_select +"_name").appendChild(div_winner);

    //add class "win_player" at player name active
    document.querySelector(".player" + player_select +  "-panel").classList.add('win_player')

    btn_Hold.disabled=true //disable button hold
    btn_RollDice.disabled=true //disable button  rolldice

}