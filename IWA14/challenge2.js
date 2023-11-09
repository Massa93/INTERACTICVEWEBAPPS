function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function internal() {
    this.c = add(this.a, this.b); // Calculate and store the result in 'c'
    this.c = multiply(this.a, this.b); // Calculate again, but the result isn't used
    return this.c;
  }
  
  // Not allowed to change below this
  
  const example1 = {
    internal: {
      a: 2,
      b: 4,
      c: 8,
    },
    add,
    multiply,
    calculate: internal,
  };
  
  const example2 = {
    internal: {
      a: 2,
      b: 2,
      c: 3,
    },
    add,
    multiply,
    calculate: internal,
  };
  
  console.log(example1.calculate()); // Output: 48
  console.log(example2.calculate()); // Output: 12
  