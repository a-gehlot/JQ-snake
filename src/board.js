const Snake = require("./snake");

class Board {
    constructor() {
        this.snake = new Snake();
        this.board = this.createBoard();
    }

    createBoard () {
        let boardArr = [];
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                boardArr.push([i, j])
            }
        }
        return boardArr;
    }

}

module.exports = Board;