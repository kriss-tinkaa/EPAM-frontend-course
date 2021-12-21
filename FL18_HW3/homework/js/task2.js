'use strick'
let randomNumber;
let usernumber;
let ball = 0;
let totalPrize = 0;
var flag = false;

function casinoRoulette(){
    if(confirm('Do you want to play a game?') !== true ){
        alert('You did not become a billionaire, but can.')
    } else{
        oneRound(100, 2)
    }
}

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

  function oneRound(startSumm, numberQuantity){
    for (let i = 0 ; i < 3; i++){
        randomNumber = getRandomArbitrary(1, numberQuantity);
        usernumber = prompt(`Choose a rolette pocket number from 0 to ${numberQuantity}
        Attempts left: ${3 - i}
        Total prize: ${totalPrize}$
        Possible prize on current attempt:  ${startSumm}$`);
        flag = false;
        if(usernumber === randomNumber){
            flag = true;
            switch (i) {
                case 0:
                    ball = startSumm;
                    break;
                case 1:
                    ball = startSumm / 2;
                    break;
                case 2:
                    ball = startSumm / 4;
                    break;
                }
            totalPrize += ball;    
            console.log(`${totalPrize}$ -true`);
            break;
        } else{
            console.log(randomNumber);
            console.log(`${totalPrize}$ - false`);
        }
    }
    if (flag){
        if(confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`)){
            startSumm *= 2;
            numberQuantity += 1;
            alert(`${startSumm} and ${numberQuantity}`)
            oneRound(startSumm, numberQuantity)
        } else{
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`)
        }
    } else{
        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`)
    }
  }

casinoRoulette()