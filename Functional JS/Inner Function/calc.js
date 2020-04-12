// this is just a example for why Inner Function we need
//Inner funtion makes code easy

function add(a, b) {
  function sum() {
    return a + b;
  }

  function sub() {
    return a - b;
  }

  function times() {
    return a * b;
  }

  function div() {
    return a / b;
  }

  return sum() + sub() + times() + div();
}

var result = add(10, 5);

console.log(result);
