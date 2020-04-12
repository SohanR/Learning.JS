function outer() {
  var a = 10;

  function inner() {
    a; //Inner funtion can acces outter funtion data, inner's data in outter is undefine

    console.log("I am  Inner Function");
  }

  inner(); //call inner function in outter function,out of outter inner dosen't exist

  console.log("I am Outter Funtion");
}

outer();
