function Cell(x, y, w) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.type = floor(random(0, 3));

  this.neighborCount = 0;
  this.neighborTypeOne = 0;
  this.neighborTypeTwo = 0;

  this.draw = function() {
    switch (this.type) {
      case 0:
        fill(255);
        break;
      case 1:
        fill(255, 0, 0);
        break;
      case 2:
        fill(0, 0, 255);
        break;
      default:
        fill(0, 255, 0);
    }

    rect(this.x * this.w, this.y * this.w, this.w, this.w);
  }

  this.getNextStep = function() {
    if (this.type) {
      if (this.neighborCount < 2) {
        return 0;
      } else if (this.neighborCount > 3) {
        return 0;
      } else {
        return this.type;
      }
    } else {
      if (neighborCount == 3) {
        if (this.neighborTypeOne > this.neighborTypeTwo) {
          return 1;
        } else {
          return 2;
        }
      } else {
        return 0;
      }
    }
  }
}
