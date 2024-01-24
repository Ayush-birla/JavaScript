let number="";
let Numberofnumber=Number(number);
console.log(typeof Numberofnumber);
console.log( Numberofnumber);

/*
    33a->NaN
    "33"->33
    ""->0
    undefined->NaN
    null->0
*/

let islog=""
let bIsLog=Boolean(islog);
console.log(typeof bIsLog);
console.log(bIsLog);

/*
    1->true
    0->false
    "a"->true
    ""->false
    null->false
    undefined->false
 */
const id=Symbol("123")
console.log(id);

const hero=["rajesh","Rohit","ramu"]
console.log(hero);

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person.age);

hero.forEach(element => {
   console.log(element); 
});