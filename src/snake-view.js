const Board = require("./board");

//Keystroke reference
// w: 87, a: 65, s: 83, d: 68

class View {
    constructor(game, displayElement) {
        this.$el = displayElement;
        this.game = game;
        this.board = this.game.board;
        this.buildBoard();
        this.drawBoard();
        $(document).keydown(this.handleKeyEvent.bind(this));
        this.stepInterval = setInterval(this.step.bind(this), 500)
    }

    buildBoard() {
        for (let i = 0; i < 20; i++) {
            let ul = $("<ul></ul>")
            for (let j = 0; j < 20; j++) {
                ul.append("<li></li>")
            }
            this.$el.append(ul);
        }
    }

    drawBoard() {
        $("ul li").css("background-color", "white")
        let $appleRow = $(`ul:nth-child(${this.board.apple[0] + 1})`)
        let $appleCol = $appleRow.find(`li:nth-child(${this.board.apple[1] + 1})`)
        $appleCol.css('background-color', "orange")
        this.board.snake.segments.forEach((segment) => {
            let $row = $(`ul:nth-child(${segment[0] + 1})`)
            let $col = $row.find(`li:nth-child(${segment[1] + 1})`)
            $col.css("background-color", "green")
        })
        console.log(this)
    }

    handleKeyEvent(event) {
        switch (event.which) {
            case 87:
                this.board.snake.turn("N");
                break;
            case 65:
                this.board.snake.turn("W");
                break;
            case 83:
                this.board.snake.turn("S");
                break;
            case 68:
                this.board.snake.turn("E");
                break;
        }
    }

    step() {
        if (this.board.snake.move()) {
            this.drawBoard() 
        } else {
          window.alert("game over!")
          clearInterval(this.stepInterval)
        }
    }
}

module.exports = View;