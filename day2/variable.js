
const age = 18;
const myName = "patiance"
const myFavFood=["meat","chips","casava","maize","rice"]
console.log("My name is " +  myName  + " and Iam  " + age   + "years old");
const array = ["Fillette",13,false];
console.log(array)
console.log(myFavFood);
function myLastName(){
    let me="Aline";
    console.log(me);
}
myLastName();

let pa="all";
let number =12;
console.log(pa % number);

//for in
//purpose:is used to iterate over the enumerable properties of an object
//can execute function more than once
const add= { a: 1, b: 2, c: 3 };
for (const property in add) {
  console.log(`${property}: ${add[property]}`);
}
const person={
    name: 'Sylvie',
    age:30,
    city: 'New York',
};
for (let key in person){
    console.log(key + ':' + person[key]);
} 
//for each
//purpose:is desidned to iterate over elements in an array
//executes function once
const numbers = [1, 2, 3, 4, 5,6,8];
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  } 

  const fi=[[1,2],[3,4],[5,6],7,10];
  console.log(fi[4]);








