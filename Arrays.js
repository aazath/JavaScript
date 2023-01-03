// var countries = ["Srilanka","India","Pakistan","Nepal"];

// console.log(countries);

// var cities = new Array("Colombo","Kandy","Kalmunai");

// console.log(cities);
// console.log(cities[1]);
// console.log("Lenth of the Array is :",cities.length);

// cities.pop();//remove the last item in the array
// console.log(cities);

// cities.shift();//remove the first item in the list
// console.log(cities);

// cities.unshift("Galle");//add the item at the first place of the list
// console.log(cities);

// var name = "Aazath";
// console.log(Array.from(name));//converting a string into array of char

// function isEven(elem){
//     // if (elem % 2 ===0) {
//     //     return true;
//     // }
//     // return false;

//     return elem % 2 ===0;
// }

// var isEven = function isEven(elem){
//     return elem % 2 ===0;
// }

// var isEven = (elem) =>{
//     return elem % 2 ===0;
// };

// console.log(isEven(5));

//callback function
// var result = [2,3,4,,8,10].every(isEven);//every() will traverse the array given and pass the item
//one-by-one to the method
//if all element returns as true then final result will be true or
//if any of the item return as false then the final result will be false
// console.log(result);

//callback function with arrow
// var result = [2,4,6,8].every((el) => {
//     return el % 2 === 0;
// });

//modified version of arrow function
var result = [2,4,6,8].every((el) => el % 2 === 0);

console.log(result);