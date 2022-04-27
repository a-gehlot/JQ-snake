const Board = require("./board");

//Keystroke reference
// w: 87, a: 65, s: 83, d: 68

class View {
    constructor(displayElement) {
        this.$el = $(displayElement);
        this.board = new Board();
        $(selector).keypress(this.handleKeyEvent(e));
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
}