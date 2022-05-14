class Snake {

    CARD_DIR = {
        "N": [-1,0],
        "S": [1,0],
        "E": [0,1],
        "W": [0,-1]
    }
    
    constructor(board) {
        this.direction = "N";
        this.segments = [[10,10], [11,10], [12,10], [13,10], [14, 10], [15,10]];
        this.board = board;
    }

    move() {
        if (!this.inBounds() || this.hitSelf()) {
            return false;
        }
        switch(this.direction) {
            case "N":
                this.shiftSeg([-1,0]);
                break;
            case "S":
                this.shiftSeg([1,0]);
                break;
            case "E":
                this.shiftSeg([0,1]);
                break;
            case "W":
                this.shiftSeg([0, -1]);
                break;
        }
        this.checkApple();
        return true;
    }

    shiftSeg(dirCoord) {
        this.segments.pop();
        let newHead = this.segments[0].map((num, idx) => {
            return num + dirCoord[idx]
        })
        this.segments.unshift(newHead);
    }

    checkApple() {
        if (JSON.stringify(this.segments[0]) === JSON.stringify(this.board.apple)) {
            this.board.addApple();
            this.addRearSeg();
        }
    }


    turn(dir) {
        if (this.isOpposite(dir)) {
            return;
        }
        this.direction = dir;
        console.log(dir)
    }

    isOpposite(dir) {
        switch(this.direction) {
            case "N":
                if (dir === "S") {
                    return true;
                }
                break;
            case "S":
                if (dir === "N") {
                    return true;
                }
                break;
            case "E":
                if (dir === "W") {
                    return true;
                }
                break;
            case "W":
                if (dir === "E") {
                    return true;
                }
                break;
        }   
        return false;
    }

    inBounds() {
        if (this.segments[0][0] >= 20 || this.segments[0][0] < 0 ||
            this.segments[0][1] >= 20 || this.segments[0][1] < 0) {
                return false;
            }
        return true;
    }

    hitSelf() {
        if (this.segments.length <= 4) {
            return false;
        }
        for (let i = 4; i < this.segments.length; i++) {
            if (JSON.stringify(this.segments[0]) === JSON.stringify(this.segments[i])) {
                return true;
            }
        }
        return false;
    }

    addRearSeg() {
        let lastSeg = this.segments[this.segments.length - 1];
        let newSeg = [];
        for (let i = 0; i <= 2; i++) {
            newSeg.push(lastSeg[i] + this.CARD_DIR[`${this.direction}`][i]);
        }
        this.segments.push(newSeg);
    }
    
}

module.exports = Snake;