/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\n\nclass Board {\n    constructor() {\n        this.snake = new Snake();\n        this.board = this.createBoard();\n    }\n\n    createBoard () {\n        let boardArr = [];\n        for (let i = 0; i < 20; i++) {\n            let row = []\n            for (let j = 0; j < 20; j++) {\n                row.push([])\n            }\n            boardArr.push(row);\n        }\n        return boardArr;\n    }\n\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\nconst View = __webpack_require__(/*! ./snake-view */ \"./src/snake-view.js\")\n\n$(() => {\n    let board = new Board();\n    let snake = new Snake(board);\n    new View(snake, $('.snake-game'));\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/snake-view.js":
/*!***************************!*\
  !*** ./src/snake-view.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n//Keystroke reference\n// w: 87, a: 65, s: 83, d: 68\n\nclass View {\n    constructor(game, displayElement) {\n        this.$el = displayElement;\n        this.game = game;\n        this.board = this.game.board;\n        this.buildBoard();\n        this.drawBoard();\n        $(document).keydown(this.handleKeyEvent.bind(this));\n        this.stepInterval = setInterval(this.step.bind(this), 500)\n    }\n\n    buildBoard() {\n        for (let i = 0; i < 20; i++) {\n            let ul = $(\"<ul></ul>\")\n            for (let j = 0; j < 20; j++) {\n                ul.append(\"<li></li>\")\n            }\n            this.$el.append(ul);\n        }\n    }\n\n    drawBoard() {\n        $(\"ul li\").css(\"background-color\", \"white\")\n        this.board.snake.segments.forEach((segment) => {\n            let $row = $(`ul:nth-child(${segment[0]})`)\n            let $col = $row.find(`li:nth-child(${segment[1]})`)\n            $col.css(\"background-color\", \"green\")\n        })\n    }\n\n    handleKeyEvent(event) {\n        switch (event.which) {\n            case 87:\n                this.board.snake.turn(\"N\");\n                break;\n            case 65:\n                this.board.snake.turn(\"W\");\n                break;\n            case 83:\n                this.board.snake.turn(\"S\");\n                break;\n            case 68:\n                this.board.snake.turn(\"E\");\n                break;\n        }\n    }\n\n    step() {\n        if (this.board.snake.inBounds()) {\n            this.board.snake.move();\n            this.drawBoard()\n        } else {\n          window.alert(\"game over!\")\n          clearInterval(this.stepInterval)\n        }\n    }\n}\n\nmodule.exports = View;\n\n//# sourceURL=webpack:///./src/snake-view.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/***/ ((module) => {

eval("class Snake {\n\n    CARD_DIR = {\n        \"N\": [-1,0],\n        \"S\": [1,0],\n        \"E\": [0,1],\n        \"W\": [0,-1]\n    }\n    \n    constructor(board) {\n        this.direction = \"N\";\n        this.segments = [[10,10]];\n        this.board = board;\n    }\n\n    move() {\n        let lastSeg = this.segments.pop();\n        switch(this.direction) {\n            case \"N\":\n                this.addSeg(lastSeg, [-1,0]);\n                break;\n            case \"S\":\n                this.addSeg(lastSeg, [1,0]);\n                break;\n            case \"E\":\n                this.addSeg(lastSeg, [0,1]);\n                break;\n            case \"W\":\n                this.addSeg(lastSeg, [0, -1]);\n                break;\n        }\n    }\n\n    addSeg(lastSeg, dir) {\n        let i = lastSeg[0] + dir[0];\n        let j = lastSeg[1] + dir[1];\n        this.segments.push([i,j])\n    }\n\n\n\n    turn(dir) {\n        this.direction = dir;\n        console.log(this.dir);\n    }\n\n    inBounds() {\n        if (this.segments[0][0] >= 20 || this.segments[0][0] <= 0 ||\n            this.segments[0][1] >= 20 || this.segments[0][1] <= 0) {\n                return false;\n            }\n        return true;\n    }\n}\n\nmodule.exports = Snake;\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;