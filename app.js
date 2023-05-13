// object destructuring 1
/*
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;
//what does the following code return?
console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//object destructoring 2

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  //what prints out here
  console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
  

  //object destructuring 3
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // `Your name is Alejandro and you like purple`
  getUserData({firstName: "Melissa"}) // `Your name is Melissa and you like green`
  getUserData({}) // `Your name is undefined and you like green`

  

  //Array destructuring 1

  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi



//Array destructuring 2

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); // ["bright copper Kettle", "warm woolen mittens", "brown paper packages tied up with string"]
  
 

  //Array destructuring 3

  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]


// 2015 Refactoring 

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {numbers: {a, b}} = obj;



//ES5 Array Swap write ES2015 version

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;


let arr = [1, 2];
let firstVal = arr[0];
let secondVal = arr[1];

[firstVal, secondVal] = [secondVal, firstVal];

// output from first val after destructuring switch is 2 and secondVal is 1


## **raceResults()**

Write a function called ***raceResults*** which accepts a single array argument. It should return an object with the keys ***first***, ***second***, ***third***, and ***rest***.

- first: the first element in the array
- second: the second element in the array
- third: the third element in the array
- rest: all other elements in the array

**Write a *one line* function to make this work using**

- An arrow function
- Destructuring
- `Enhanced` object assignment (same key/value shortcut)
*/

//race results function exercise
const raceResults = ([first,second,third, ...restOfElements]) => ({
        first,
        second,
        third,
        restOfElements
    })

    // output uses the key names first, second, third, and restOfElements and 
    // assigned the passed in strings into each of those values.








