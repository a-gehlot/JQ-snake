class Snake {

    CARD_DIR = ["N","E","S","W"]
    
    constructor(board) {
        this.direction = "N";
        this.segments = [];
        this.board = board;
    }

    move() {
        
    }

    turn(dir) {
        this.direction = dir;
    }
}

module.exports = Snake;