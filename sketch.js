var cols;
var rows;
var field;
var w = 20;
var player = 1;
var player_output;
var ai;
var isPlayerOneAi = false;
var checkOneAi;
var isPlayerTwoAi = false;
var checkTwoAi;

function setup() {
  createCanvas(601, 601);
  cols = floor(width / w);
  rows = floor(height / w);

  player_output = createP();
  player_output.html("Spieler " + player + " ist am Zug");

  checkOneAi = createCheckbox('Player 1 is AI', false);
  checkOneAi.changed(function() {
    isPlayerOneAi = !isPlayerOneAi
  });

  checkTwoAi = createCheckbox('Player 2 is AI', false);
  checkTwoAi.changed(function() {
    isPlayerTwoAi = !isPlayerTwoAi
  });

  field = new Field(rows, cols, w);
  field.setNeighbors();

  ai = new AI(2);

  noLoop();
}

function draw() {
  background(0);
  field.draw();
}

function mouseClicked() {

  // Spieler

  var x = floor(mouseX / w);
  var y = floor(mouseY / w);

  if (!field.cells[x][y]) {
    return;
  }

  if (!field.click(player, x, y)) {
    return;
  }

  field.setNeighbors();
  field.step();
  field.setNeighbors();

  if (player == 1) {
    player = 2;
  } else {
    player = 1;
  }
  player_output.html("Spieler " + player + " ist am Zug");
  redraw();

  // AI
  var move = ai.getMove(field);
  field.click(player, move['x'], move['y']);
  field.setNeighbors();
  field.step();
  field.setNeighbors();

  if (player == 1) {
    player = 2;
  } else {
    player = 1;
  }
  player_output.html("Spieler " + player + " ist am Zug");
  redraw();
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
