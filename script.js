
let gameBoard = (() => { /** Module Pattern */
    'use strict';
 
    return {
        gameTable: () => {
            let board = [
                'X','O','O',
                'X','X','X',
                'O','O','X'
            ]
        }
    }
})();



let displayController = (() => {
    'use strict';

    for ( let i = 0 ; i < 9 ; i++){
        let table = document.querySelector('.table');
        let el = document.createElement('button');
        table.appendChild(el).className = 'el';

        
    }


})();

let players = (name,symbol) => { /** Factory function */
    return {name,symbol};

};
let player1 = players('player1','O');
let player2 = players('player2','X');