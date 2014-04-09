// this is a comment

/* this is a
  multiline comment
  */

// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');
// var fullName = firstName + ' ' + lastName;
//
// var age = prompt('What is your age?');
// age = parseInt(age);
//
// if(age > 20){
//   console.log('you can drink alcohol...legally ;)');
// } else {
//   console.log('you are too young to drink!');
// }
//
// if(age >= 0 && age < 6){  // between 0 and 5
//   console.log('Movie: G');
// } else if(age >= 6 && age < 13){ // between 6 and 12
//   console.log('Movie: PG');
// } else if(age >= 13 && age < 18){ // between 13 and 17
//   console.log('Movie: PG-13');
// } else { // 18 and older
//   console.log('Movie: R');
// }

// var color = prompt('What is your fav color');
// color = color.toLowerCase();
//
// switch(color){
//   case 'blue':
//     console.log('blue is awesome');
//     break;
//   case 'red':
//     console.log('red is cool');
//     break;
//   case 'green':
//     console.log('green is sublime');
//     break;
//   default:
//     console.log('i don\'t like that color');
// }

// var number = prompt('Enter a number');
// number = number * 1;
// if(number > 0 && number < 10){
//   while(number < 50){
//     console.log('Number : ' + number);
//     number += 2;
//   }
// }

// for(var i = number; i < 50; i++){
//   console.log('I :' + i);
// }

// var colors = [];
//
// var response = prompt('Enter a color or (q)uit');
// response = response.toLowerCase();
//
// while(response !== 'q'){
//   colors.push(response);
//   console.log(colors);
//   response = prompt('Enter a color or (q)uit');
//   response = response.toLowerCase();
// }

// var evens = [],
//     odds = [];
//
// for(var i = 0; i < 100; i++){
//   var remainder = i % 2;
//
//   if(remainder === 0){ // even
//     var square = i * i;
//     evens.push(square);
//   } else { // odd
//     var cube = Math.pow(i, 3);
//     odds.push(cube);
//   }
// }
//
// console.log(evens);
// console.log(odds);


function square(x){
  return x * x;
}

function cube(x){
  return Math.pow(x, 3);
}

function isOdd(x){
  return x % 2;
}

function area(l, w){
  return l * w;
}

function vol(l, w, h){
  return area(l, w) * h;
}

var z = square(3) + cube(9) - area(3,4) * vol(5,6,7);
var y = cube(square(3) - cube(2));
var x = area(square(cube(2)), cube(square(3)));
