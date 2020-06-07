/**Objectives

Practice iterating through an array of objects / dictionaries.
Imagine that you are given an array of objects.For example,
How would you print / log John's age?
How would you print / log the name of the first object ?
How would you print / log the name and age of each user using a for loop ?
*/

var users = [{ name: "Michael", age: 37, type:"tote" }, { name: "John", age: 30, type:"clutch" }, { name: "David", age: 27, type: "shoulderbag"}];
    
console.log(users[1].age);
console.log(users[0].name);
for (var i = 0; i < users.length; i++) {
  console.log(users[i].name, "-", users[i].age);
  console.log(users[i].type)
}
