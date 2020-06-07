/**
 * Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
 */
function array() {
  var add = []
  for (var i = 1; i <= 255; i++) {
    add.push(i)
  }
  return add
}

console.log(array())

/**
 * Get even 1000 - Write a
 function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator
 for this exercise.
 */

function sumEvenNumbers() {
  var sum = 0
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0)
      sum = i + sum
  }
  return sum
}
var sum = sumEvenNumbers()
console.log(sum)

/**
 * Sum odd 5000 - Write a
 function that returns the sum of all the odd numbers from 1 to 5000.(e.g.1 + 3 + 5 + ...+4997 + 4999).
 */

function sumOddNumbers() {
  var sum = 0
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 == 1)
      sum = i + sum
  }
  return sum
}
var sum = sumOddNumbers()
console.log(sum)

/**
 * Iterate an array - Write a
 function that returns the sum of all the values within an array.(e.g. [1, 2, 5] returns 8.[-5, 2, 5, 12] returns 14).
 */
function addValues(array) {
  var sum = 0
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum;
}

/**
 * Find max - Given an array with multiple values, write a
 function that returns the maximum number in the array.(e.g.for[-3, 3, 5, 7] max is 7)
 */

function findMax(array) {
  var max = array[0]
  for (var i = 0; i < array.length; i++) {
    if (max = array[i]) {
      max < array[1];
    }
  }
  return max;
}

/**
 * Find average - Given an array with multiple values, write a
 function that returns the average of the values in the array.(e.g.for[1, 3, 5, 7, 20] average is 7.2)
 */
function average(arr) {
  var avg = 0
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  avg = sum / arr.length;
  return avg
}

var avg = average([2, 4, 6, 8])
console.log(avg)

/**
 * Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method. */
function pushOdd() {
  var array = []
  for (var i = 1; i < 50; i++) {
    if (i % 2 == 1)
      array.push(i)
  }
  return array
}

var array = pushOdd()
console.log(array)

/**
 * Greater than Y - Given value of Y, write a
 function that takes an array and returns the number of values that are greater than Y.For example
 if arr = [1, 3, 5, 7] and Y = 3, your
 function will
 return 2.(There are two values in the array greater than 3, which are 5, 7).
 */

function greater(arr, y) {
  var values = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      values++;

    }
  }
  return values;

}

console.log(greater([15, 56, 2, 6], 40));

/**
 * Squares - Given an array with multiple values, write a function that 
  replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4]) 
 */

function square(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];

  }
  return array;

}
console.log(square([1, 5, 10, -2]));

/**
 * Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
 */

function negative(arr) {
  for (var i = 0; i < array.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}
console.log(negative([1, 5, 10, -2]));

/**
 Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
 */

function maxMinAvg(arr) {
  var sum = 0;
  var max = arr[0];
  var min = arr[0];
  for (var idx = 0; idx < arr.length; idx++) {
    sum = sum + arr[idx];
    if (arr[idx] > max) {
      max = arr[idx];
    }
    else if (arr[idx] < min) {
      min = arr[idx];
    }
  }
  var newArr = [];
  newArr.push(max);
  newArr.push(min);
  var avg = sum / arr.length
  newArr.push(avg);

  return newArr;
}
console.log(maxMinAvg([2, 10, -3, 4]));

/**
 * // Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
 */

function swap(arr) {
  var temp = array[array.length - 1];
  array[array.length - 1] = arr[0];
  array[0] = temp;
  return array;
}
var check = [1, 5, 10, -2]
console.log(swap(check));


/** 
 * Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
*/
function positive(arr) {
  for (var i = 0; i < array.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}
console.log(positive([1, 5, 10, -2]));