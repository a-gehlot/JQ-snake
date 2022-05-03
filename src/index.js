const Board = require("./board");
const Snake = require("./snake");
const View = require("./snake-view")

$(() => {
    let board = new Board();
    let snake = new Snake(board);
    new View(snake, $('main'));
})