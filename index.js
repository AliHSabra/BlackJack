let sum=0;
let cards=[];
let hasBlackJack = false;
let isAlive = false;
let message="";
let messageEL=document.getElementById("message-el");
let sumEL=document.getElementById("sum-el");
let cardsEL=document.getElementById("cards-el");
let playerEL=document.getElementById("player-el");
let player = {
    name: "",
    chips: 0
}




function getRandomCard(){
 let randomvar= Math.floor(Math.random() * 13)+1;
    if(randomvar===1){
        
        let ask = window.prompt("You got an Ace ! Choose 1 or 11.")
        if(ask==1){
            randomvar=1
        }
        
        if(ask==11){
            randomvar=11
        }

        return randomvar;

        
    }
    

    if(randomvar > 10)
    return 10;

    else
    return randomvar;
}



function startGame(){
    
    let playername=window.prompt("Enter your name not a number")
    if(isNaN(playername)){
        player.name=playername;
        }
    else 
    {
        while (true) {
            playername = prompt("Bro just enter your name I got coding to do");
            if (isNaN(playername)) {
                player.name=playername;
                   break;
                }
                alert("BRUH, cmon your name isn't a number");
                
                playername=prompt("Chop chop enter your name")
                if (isNaN(playername)) {
                    player.name=playername;
                       break;
                    }
           
          }
          
    }
    
    
    let chips= window.prompt("How much money you want to bid? Try a number larger than 1 billion")
    if(isNaN(chips)){ 
        while (true) {
            chips = prompt("Enter a numeric value:");
            if (!isNaN(chips)) {
              break;
            }
            alert("Please enter a numeric value!");
          }
        }
    if(chips < 10000000){
        player.chips=chips;
        
        playerEL.textContent = player.name + ": $" + player.chips; 

        alive()
    
    }
    

    
    else if(chips > 10000000 ){
        for(let i = 0 ; chips > 10000000;i++ ){
            chips=window.prompt("LOL you actually did what I told you. Anyways bidding with a lot of money is dangerous. Please enter a smaller number.")
            if(chips < 10000000){
                player.chips=chips

               alive()
               

                return playerEL.textContent = player.name + ": $" + player.chips;
            }
        }
    }

    

}

function alive(){
    isAlive=true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();}

function renderGame(){
    
    cardsEL.textContent="Cards: "

    for (let i = 0 ; i < cards.length ; i++){
        cardsEL.textContent+=  cards[i]+ " · ";
    }

    sumEL.textContent="Sum: "+sum;
    if(sum<=20){
        message = "Do you want to draw a new card?";

    }
    else if(sum === 21){
        message = "Woohoo! You have got yourself a BlackJack";
        hasBlackJack = true;
    }
    else {
       message = "Sorry I took all your chips, bye bye gambler";
       player.chips=0;
       playerEL.textContent = player.name + ": $" + player.chips
        isAlive = false;
    }
    
    messageEL.textContent= message;
}

function newCard(){
    if(isAlive===true && hasBlackJack==false){
    let card = getRandomCard();
    cards.push(card);
    sum+=card;
    renderGame();
    }
    
}


