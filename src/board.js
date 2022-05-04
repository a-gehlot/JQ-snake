const Snake = require("./snake");

class Board {
    constructor() {
        this.snake = new Snake();
        this.board = this.createBoard();
    }

    createBoard () {
        let boardArr = [];
        for (let i = 0; i < 20; i++) {
            let row = []
            for (let j = 0; j < 20; j++) {
                row.push([])
            }
            boardArr.push(row);
        }
        return boardArr;
    }

}

module.exports = Board;