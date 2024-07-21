function rollDice() {
    const numdice = document.getElementById('num-dice').value;
    const diceresults = document.getElementById('dice-results');
    const images = document.getElementById('images');
    const values = [];
    const imagesArray = [];
    for(let i = 0; i < numdice; i++){
        const randomNum = Math.floor(Math.random() * 6) + 1;
        values.push(randomNum);
        imagesArray.push(`dice-${randomNum}.png`);
        images.innerHTML += `<img src="/assets/${imagesArray[i]}" alt="Dice ${values}" width="100" height="100">`;
         }

         diceresults.textContent = `Results: ${values.join(', ')}`;
        images.innerHTML =images.join('');


}