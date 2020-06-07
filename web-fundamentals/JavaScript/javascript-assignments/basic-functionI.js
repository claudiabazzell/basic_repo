
//13 out of 15 correct (2 were incorrect and 2 I guessed but will check in with peers.)

function a() {
  return 35;
}
console.log(a())

//prediction: 35 as it is asking to console.log what is inside of function a.

function a() {
  return 4;
}
console.log(a() + a());
//prediction: 8 as it is asking to console.log the addition of what is inside of function a.

function a(b) {
  return b;
}
console.log(a(2) + a(4));
//prediction: 6 as b is a parameter of function a.

function a(b) {
  console.log(b);
  return b * 3;
}
console.log(a(3));
//prediction: console.log 3, then 9 as 3(b) is a parameter of a and we are to multiply by 3.

function a(b) {
  return b * 4;
  console.log(b);
}
console.log(a(10));
//prediction: 40. B is 10 and we only lof once as the return line came before console.log

function a(b) {
  if (b < 10) {
    return 2;
  }
  else {
    return 4;
  }
  console.log(b);
}
console.log(a(15));
//prediction: 4. Log once, as return line comes before it and ends the function.

function a(b, c) {
  return b * c;
}
console.log(10, 3);
console.log(a(3, 10));
//prediction: Log, 10,3 then solve function a 3*10=30

function a(b) {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  return i;
}
console.log(3);
console.log(4);
//prediction:3,4. I didn't quite understand this one but I guessed it would be 3 and 4 as there wasn't anything to for the function to do.

function a() {
  for (var i = 0; i < 10; i++) {
    i = i + 2;
    console.log(i);
  }
}
a();
//prediction: logging 2,5,8,11. i continues to  grow as we iterate through the loop.

function a(b, c) {
  for (var i = b; i < c; i++) {
    console.log(i);
  }
  return b * c;
}
a(0, 10);
console.log(a(0, 10));
//prediction: I guessed 0 but didn't quite understand how. Return is asking to mulitply 0*10 and the function ends there.

function a() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      console.log(j);
    }
    console.log(i);
  }
}
//prediction: no output, the function is not being called.

function a() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      console.log(i, j);
    }
    console.log(j, i);
  }
}
//prediction: no output, the function is not being called.

var z = 10;
function a() {
  var z = 15;
  console.log(z);
}
console.log(z);
//prediction: 15, correct output is 10.

var z = 10;
function a() {
  var z = 15;
  console.log(z);
}
a();
console.log(z);
//prediction: 15, as the function is being called and 10 bc I am logging z.

var z = 10;
function a() {
  var z = 15;
  console.log(z);
  return z;
}
z = a();
console.log(z);
//predition: 10, but output is 15,15. I realize now z = a(15), so we log that and now they want us to log z which is now 15.