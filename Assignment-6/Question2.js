class Shape {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
    }
  }
  class Rectangle extends Shape {
    getArea() {
      return this.width * this.height;
    }
  }
  class Triangle extends Shape {
    getArea() {
      return 0.5 * this.width * this.height;
    }
  }
  const rect = new Rectangle(10, 5);
  const tri = new Triangle(10, 5);
  
  console.log("Rectangle Area:", rect.getArea());
  console.log("Triangle Area:", tri.getArea()); 
