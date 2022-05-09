var player , winner, empatado= null;
var xix = 'X'
var ball = 'O'
var playerSelected = document.getElementById('jogador-selecionado');
var winnerSelected = document.getElementById('vencedor-selecionado');

changePlayer(xix);

function choosesquare(id) {
    if (winner !== null){
        return;
    }
    var square = document.getElementById(id);
    if (square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000';

    if (player === xix){
        player = ball;
    }else {
        player = xix;
    }
    
    changePlayer(player);
    checkWinner();
    
}

function changePlayer(valor) {
    player = valor;
    playerSelected.innerHTML = player;
}

function checkWinner() {
    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);
    if(checkSequence(square1, square2, square3)){
        changeColorSquare(square1, square2, square3);
        changeWinner(square1);
        return;       
    }
    if(checkSequence(square4, square5, square6)){
        changeColorSquare(square4, square5, square6);
        changeWinner(square4);
        return;
    }
    if(checkSequence(square7, square8, square9)){
        changeColorSquare(square7, square8, square9);
        changeWinner(square7);
        return;
    }
    if(checkSequence(square1, square4, square7)){
        changeColorSquare(square1, square4, square7);
        changeWinner(square1);
        return;
    }
    if(checkSequence(square2, square5, square8)){
        changeColorSquare(square2, square5, square8);
        changeWinner(square2);
        return;
    }
    if(checkSequence(square3, square6, square9)){
        changeColorSquare(square3, square6, square9);
        changeWinner(square3);
        return;
    }
    if(checkSequence(square1, square5, square9)){
        changeColorSquare(square1, square5, square9);
        changeWinner(square1);
        return;
    }
    if(checkSequence(square3, square5, square7)){
        changeColorSquare(square3, square5, square7);
        changeWinner(square3);
        
        
    }else {
        empatado(square1)
    }

}



function changeWinner(square){
    winner = square.innerHTML;
    winnerSelected.innerHTML = winner;
}

function changeColorSquare(square1, square2, square3){
    square1.style.background = '#0f0';
    square2.style.background = '#0f0';
    square3.style.background = '#0f0';
}

function checkSequence(square1, square2, square3){
    var isEqual = false;

    if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
        isEqual = true;
    }
    return isEqual;

}



function restart() {
    winner = null;
    winnerSelected.innerHTML = '';

    for(var i =1; 1 <= 9; i++){
        var square = document.getElementById(i);
        square.style.background = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '-';

    }
    changePlayer(xix);
}