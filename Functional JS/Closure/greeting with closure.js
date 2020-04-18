function greeting(msg) {
  return function (name) {
    console.log(msg + " " + name); //here msg is closure
  };
}

var hello = greeting("Hello"); // Hello is cosure here

hello("Sohan"); // Sohan also closure .
