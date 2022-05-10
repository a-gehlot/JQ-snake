class Snake {

    CARD_DIR = {
        "N": [-1,0],
        "S": [1,0],
        "E": [0,1],
        "W": [0,-1]
    }
    
    constructor(board) {
        this.direction = "N";
        this.segments = [[10,10], [11,10], [12,10], [13,10]];
        this.board = board;
    }

    move() {
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
    }

    shiftSeg(dirCoord) {
        this.segments.pop();
        let newHead = this.segments[0].map((num, idx) => {
            return num + dirCoord[idx]
        })
        this.segments.unshift(newHead);
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
        if (this.segments[0][0] >= 20 || this.segments[0][0] <= 0 ||
            this.segments[0][1] >= 20 || this.segments[0][1] <= 0) {
                return false;
            }
        return true;
    }

    addRearSeg() {

    }
    
}

module.exports = Snake;