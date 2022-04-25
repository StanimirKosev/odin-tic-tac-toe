
let gameBoard = (() => { /** Module Pattern */
    'use strict';
    
    let board = [ 
        '','','',
        '','','',
        '','',''
    ]
     
    function gameTable(){
        for ( let i = 0 ; i < board.length ; i++){
            let table = document.querySelector('.table');
            let el = document.createElement('button');
            table.appendChild(el).className = 'el';
            el.setAttribute('data-el-index',i);
        }
    }
    
    return { /** Revealing Module Pattern */
        gameTable: gameTable,
        board: board
    }

})();
gameBoard.gameTable(); 


let players = (name,symbol,score) => { /** Factory function */
    
    const addToScore = ( num = 1) => 
    score = parseFloat(score) + parseFloat(num);
    
    return {name,symbol,score,addToScore};
};
let player1 = players('Player 1','X','0');
let player2 = players('Player 2','O','0');


let playGame = (() => {
    'use strict';
    
    let arr = gameBoard.board;
    let symbol = '';
    let winningPlayer ='';
    
    let element = document.addEventListener('click', (event) => {
        plays(event);
    });

    let restartButt = document.querySelector('.restart');
    let restart = restartButt.addEventListener('click', () => {
        restartGame();
    });

    let winner = document.querySelector('.winner');
    const buttons = document.querySelectorAll('[data-el-index]');

    function plays(event){
        if (event.target.className === "el"){
            const index = event.target.getAttribute('data-el-index');
            const el = document.querySelectorAll('[data-el-index]')[index];
            
            if (symbol === ''){
                symbol = player1.symbol;
                el.style.color = '#696969';
                el.innerText = player1.symbol;
                arr[index] = player1.symbol;
                winningPlayer = player1.name;
            }
            
            else if (symbol === player1.symbol){
                symbol = player2.symbol;
                el.style.color = 'white';
                el.innerText = player2.symbol;
                arr[index] = player2.symbol;
                winningPlayer = player2.name;
            }

            else if (symbol === player2.symbol){
                symbol = player1.symbol;
                el.style.color = '#696969';
                el.innerText = player1.symbol;
                arr[index] = player1.symbol;
                winningPlayer = player1.name;
            }
            el.disabled = true;
            checkWinner();
        }
    }

    function checkWinner(){
        if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== ''){stopGame();winningP();  winner.textContent = `${winningPlayer} Wins!`;return}
        if (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== ''){stopGame();winningP();  winner.textContent = `${winningPlayer} Wins!`;return}
        if (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== ''){stopGame();winningP();  winner.textContent = `${winningPlayer} Wins!`;return}
        if (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== ''){stopGame();winningP();  winner.textContent = `${winningPlayer} Wins!`;return}
        if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== ''){stopGame();winningP();  winner.textContent = `${winningPlayer} Wins!`;return}
        if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== ''){stopGame();winningP();  winner.textContent = `${winningPlayer} Wins!`;return}
        if (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== ''){stopGame();winningP();  winner.textContent = `${winningPlayer} Wins!`;return}
        if (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== ''){stopGame();winningP();  winner.textContent = `${winningPlayer} Wins!`;return}
        if (arr[0] !== '' && arr[1] !== '' && arr[2] !== '' && arr[3] !== '' && arr[4] !== '' && arr[5] !== '' 
            && arr[6] !== '' && arr[7] !== '' && arr[8] !== ''){winner.textContent = 'Draw!';return}
    }

    function restartGame(){
        symbol = '';
        winner.textContent = winningPlayer='';
        for (let i = 0 ; i < arr.length ; i++){
            arr[i]='';
            buttons[i].innerText = '';
            buttons[i].disabled = false;
        }
    }

    function stopGame(){
        for (let i = 0 ; i < arr.length ; i++){
            buttons[i].disabled = true;
        }
    }

    function winningP(){

        let result1 = document.querySelector('.result1');
        let result2 = document.querySelector('.result2');
        
        if (winningPlayer === player1.name){
            result1.textContent = `X ${player1.addToScore()}`
        }
        
        if (winningPlayer === player2.name){
            result2.textContent = `O ${player2.addToScore()}`
        }
    }

    return {
        element: element,
        restart: restart
    }

})();

