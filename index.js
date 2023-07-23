// function source(player){
//     switch(player){
//         case 1 :
//             return "images/dice1.png";
            
//         case 2 :
//             return "images/dice2.png";

//         case 3 :
//             return "images/dice3.png";

//         case 4 :
//             return "images/dice4.png";
            
//         case 5 :
//             return "images/dice5.png";

//         case 6 :
//             return "images/dice6.png";
//     }
// }

if(performance.navigation.type == performance.navigation.TYPE_RELOAD) {

    var player1 = Math.floor(Math.random()*6+1);
    var player2 = Math.floor(Math.random()*6+1);
    document.querySelector('.img1').setAttribute('src', "images/dice" + player1 + ".png");
    document.querySelector('.img2').setAttribute('src', "images/dice" + player2 + ".png");
    if(player1 < player2){
        document.querySelector('h1').textContent = "Player 2 Wins!🚩"
    }
    else if(player1 > player2){
        document.querySelector('h1').textContent = "🚩Player 1 Wins!"
    }
    else{
        document.querySelector('h1').textContent = "Its a Tie!"
    }
}
