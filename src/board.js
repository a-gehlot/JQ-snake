const Snake = require("./snake");

class Board {
    constructor() {
        this.snake = new Snake(this);
        this.board = this.createBoard();
        this.addApple();
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

    addApple() {
        let i = Math.floor(Math.random() * 20);
        let j = Math.floor(Math.random() * 20);
        while (this.isOccupied([i, j])) {
            i = Math.floor(Math.random() * 20);
            j = Math.floor(Math.random() * 20);
        }
        this.board[i][j] = "A"
        this.apple = [i, j]
    }

    isOccupied(pos) {
        for (let i = 0; i < this.snake.segments.length; i++) {
            if (JSON.stringify(this.snake.segments[i]) === JSON.stringify(pos)) {
                return true;
            }
        }
        return false;
    }

}

module.exports = Board;