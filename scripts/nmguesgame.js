const  min = 1 ; 
const  max = 100 ;

const answer =Math.floor( Math.random()* (max - min + 1) + min ) + min;

let attemps = 6 ; 
let guess  ;
running = true ; 

while (running){

    guess = window.prompt(`Guess a number between ${min} and ${max} : `);
    guess = Number(guess); 
    if (isNaN(guess)){
        console.log('Please enter a number!');
    }else if(guess < min || guess > max){
        window.alert(`Please enter a number between ${min} and ${max}!`);
    }else {
        attemps++;
        if (guess > answer){
            window.alert('Too high!');
        }else if(guess < answer){
            window.alert('Too low!');
        } else{
            window.alert(`Congratulations! You guessed the correct number in ${attemps} attempts)`); 
            running =false ; 
               }       
            }
    }
    


