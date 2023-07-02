class Ship {
  constructor(length, position = null) {
    this.length = length;
    this.hits = 0;
    this.position = position;
  }

  hit() {
    this.hits += 1;
    return this.hits;
  }

  isSunk() {
    if (this.hits === this.length) {
      return true;
    }
    return false;
  }
}

module.exports = Ship;
