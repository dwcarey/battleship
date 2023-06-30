class Ship {
  constructor(length, position = null) {
    this.length = length;
    this.hits = 0;
    this.position = position;
  }

  hit() {
    return this.hits + 1;
  }

  isSunk() {
    if (this.hits === this.length) {
      return true;
    }
    return false;
  }
}

export { Ship };
