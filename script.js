/** Gameboard object = { gameboard = []}   check*/
/** players in objects    */
/** object for flow in game */

/** module or factory ; one of something ( gameboard displayCOntroller - module) 
 * multiples of something - factory
*/


let gameBoard = (() => { /** Module Pattern */
    'use strict';
 
    return {
        gameTable: () => {
            let board = [
                '','','',
                '','','',
                '','',''
            ]
        }
    }
})();

let displayController = (() => {
    'use strict';


})();

let players = (name,symbol) => { /** Factory function */
    return {name,symbol};

};
let player1 = players('player1','O');
let player2 = players('player2','X');