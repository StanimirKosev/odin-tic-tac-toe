
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
            el.setAttribute['data-el-index',i];
            el.innerText = _board[i];
        }
    }
    
    return { /** Revealing Module Pattern */
        gameTable: gameTable
    }

})();
gameBoard.gameTable();


let players = (name,symbol) => { /** Factory function */
    return {name,symbol};
};
let player1 = players('player1','X');
let player2 = players('player2','O');


let displayController = (() => {
    'use strict';

    document.addEventListener('click', (event) => {
        plays(event);
    })

    function plays(event){
        const index = event.target.getAttribute('data-el-index');
        const el = document.querySelectorAll('[data-el-index]')[index];
        
        if (players.name === 'player1'){
            el.innerText = player1.symbol;
        }
        else if (players.name === 'player2'){
            el.innerText = player2.symbol;
        }
    }
    
})();
/** trq izkaram eventlistenera posle i kak da svurjesh inner txt...playerite purvo opravi*/
