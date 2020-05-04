//default parameter

let sqr = (a = 1, b = a) => a * b;

console.log(sqr(10));
console.log(sqr(5, 4));

//Rest operator

function sum(...num) {
  return num.reduce((x, y) => x + y);
}

let xum = sum(54, 78, 10, 14, 54);
console.log(xum);

//spread

let arr = [1, 2, 3, 4, 5];
arr = [...arr, 6, 7, 8, 9];

console.log(arr);

let obj = {
  name: "sohan",
  email: "gg@mail.com",
};

let obj1 = {
  ...obj,
};

console.log(obj1);
