class Snake {

    CARD_DIR = ["N","E","S","W"]
    
    constructor() {
        this.direction = "N";
        this.segments = [];
    }

    move() {
        
    }

    turn(dir) {
        this.direction = dir;
    }
}

module.exports = Snake;