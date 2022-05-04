class Snake {

    CARD_DIR = ["N","E","S","W"]
    
    constructor(board) {
        this.direction = "N";
        this.segments = [[10,10]];
        this.board = board;
    }

    move() {
        
    }

    turn(dir) {
        this.direction = dir;
    }
}

module.exports = Snake;