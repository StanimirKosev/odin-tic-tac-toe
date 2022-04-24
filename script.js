
let gameBoard = (() => { /** Module Pattern */
    'use strict';
    
    let _board = [ /** Private array */
        '','','',
        '','','',
        '','',''
    ]
     
    function gameTable(){
        for ( let i = 0 ; i < _board.length ; i++){
            let table = document.querySelector('.table');
            let el = document.createElement('button');
            table.appendChild(el).className = 'el';
            el.setAttribute('data-el-index',i);
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


let playGame = (() => {
    'use strict';

    let symbol = '';
    
    let element = document.addEventListener('click', (event) => {
        plays(event);
    });

    function plays(event){
        const index = event.target.getAttribute('data-el-index');
        const el = document.querySelectorAll('[data-el-index]')[index];

        if (symbol === ''){
            symbol = player1.symbol;
            el.style.color = '#696969';
            el.innerText = player1.symbol;
        }
        
        else if (symbol === player1.symbol){
            symbol = player2.symbol;
            el.style.color = 'white';
            el.innerText = player2.symbol;
        }

        else if (symbol === player2.symbol){
            symbol = player1.symbol;
            el.style.color = '#696969';
            el.innerText = player1.symbol;
        }
        el.disabled = true;
    }

    return {
        element: element
    }

})();

