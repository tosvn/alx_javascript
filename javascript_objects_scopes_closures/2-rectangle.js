// create a class with its instructor
class Rectangle {
	constructor(w, h) {
		if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
      // If w or h is <= 0 or not a number, create an empty object
      return {};
    } else {
      this.width = w;
      this.height = h;
    }
  }
}

// create a module for exports
module.exports = Rectangle;
