
let gameBoard = (() => { /** Module Pattern */
    'use strict';
    
    let _board = [ /** Private array */
        'X','O','O',
        'X','X','X',
        'O','O','X'
    ]
     
    function gameTable(){
        for ( let i = 0 ; i < _board.length ; i++){
            let table = document.querySelector('.table');
            let el = document.createElement('button');
            table.appendChild(el).className = 'el';
            el.innerText = _board[i];
        }
    }
    
    return { /** Revealing Module Pattern */
        gameTable: gameTable
    }

})();

gameBoard.gameTable();




let displayController = (() => {
    'use strict';

})();

let players = (name,symbol) => { /** Factory function */
    return {name,symbol};

};
let player1 = players('player1','O');
let player2 = players('player2','X');