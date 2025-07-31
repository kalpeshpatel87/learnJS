// Variables
// var (old), let, const

let languageWithVal = 'Javascript';

console.log(languageWithVal);

// Another way

let languageWithoutVal = '';

languageWithoutVal = 'Python';

console.log(languageWithoutVal);

// Const one time value declaration 

const secondInMinute = 60;

console.log(secondInMinute);


// Function Scope

var functionScope = 'abc';

console.log(functionScope);

if(true){

    var bod = '23rd March 1990'; // this is Function scope

}
console.log('this is Function scope:', bod);

// Block Scope

function hello(){
    /* Code */
}
if(true){

    let age = 25; // this is Block scope
    console.log('this is Block scope:', age);

    const name = 'Hello'; // this is Block scope
    console.log('this is Block scope:', name);

    var bod = '23rd March 1990'; // this is Function scope
    console.log('this is Function scope:', bod);

}

console.log('this is Function scope:', bod); // this is Function scope



// Which Use (Var, Let, Const) ?

const constNum = 40;

console.log('Const Number is: ', constNum);

let letNum = 40;

letNum = 30;

console.log('Let Number is: ', letNum);