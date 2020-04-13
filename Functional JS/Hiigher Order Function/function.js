function caller() {
  return function (name) {
    return "caller calling you " + name;
  };
}

// one way

var x = caller();

var y = x("Sohan");

console.log(y);

var z = x("DarkLord");

console.log(z);

//onother way

var a = caller()("Sohan");
console.log(a);
