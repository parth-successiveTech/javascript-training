class Shape {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      throw new Error("getArea() must be implemented by subclass");
    }
  }
  
  // Rectangle class inheriting from Shape
  class Rectangle extends Shape {
    getArea() {
      return this.width * this.height;
    }
  }
  
  // Triangle class inheriting from Shape
  class Triangle extends Shape {
    getArea() {
      return 0.5 * this.width * this.height;
    }
  }
  
  // Example usage
  const rect = new Rectangle(10, 5);
  const tri = new Triangle(10, 5);
  
  console.log("Rectangle Area:", rect.getArea()); // Output: 50
  console.log("Triangle Area:", tri.getArea()); 
