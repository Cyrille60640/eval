let dice = document.getElementById('dice')

dice.addEventListener('click',()=>{

    //calculate the random number between 1 and 6
    let dice_value = Math.floor(Math.random() * 6) + 1;

    //displays the image corresponding to the calculated value
    dice.src = 'image/dice-' + dice_value + '.png';

})
