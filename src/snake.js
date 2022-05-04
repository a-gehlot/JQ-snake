class Snake {

    CARD_DIR = {
        "N": [-1,0],
        "S": [1,0],
        "E": [0,1],
        "W": [0,-1]
    }
    
    constructor(board) {
        this.direction = "N";
        this.segments = [[10,10]];
        this.board = board;
    }

    move() {
        let lastSeg = this.segments.pop();
        switch(this.direction) {
            case "N":
                this.addSeg(lastSeg, [-1,0]);
                break;
            case "S":
                this.addSeg(lastSeg, [1,0]);
                break;
            case "E":
                this.addSeg(lastSeg, [0,1]);
                break;
            case "W":
                this.addSeg(lastSeg, [0, -1]);
                break;
        }
    }

    addSeg(lastSeg, dir) {
        let i = lastSeg[0] + dir[0];
        let j = lastSeg[1] + dir[1];
        this.segments.push([i,j])
    }



    turn(dir) {
        this.direction = dir;
        console.log(this.dir);
    }
}

module.exports = Snake;