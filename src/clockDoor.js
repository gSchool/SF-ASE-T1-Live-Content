function pickDoor(origin, steps, size) {
    if( size < 1 ) return new Error("Invalid size")
    return (origin + steps) % size;
  }