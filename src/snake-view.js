const Board = require("./board");

//Keystroke reference
// w: 87, a: 65, s: 83, d: 68

class View {
    constructor(game, displayElement) {
        this.$el = $(displayElement);
        this.game = game;
        this.board = this.game.board;
        $(document).keypress(this.handleKeyEvent.bind(this));
        setInterval(this.step.bind(this), 500)
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
        this.board.snake.move();
    }
}

module.exports = View;