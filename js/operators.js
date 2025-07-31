// Assignment Operators

let x = 10;
let y;

y = x;

console.log('Y:', y);

// Compound Operators

let a = 10;
let b = 20;

a += b; // x = x + y
console.log('A:', a);
a -= b; // x = x - y
console.log('A:', a);

// Arithmetic Operators

let c = 10;

c = c + 1;
console.log('C:', c);

// Logical Operators

// 1. Logical AND (&&)
let hello = true && true;
console.log('Hello:', hello);

let hello1 = true && false;
console.log('Hello:', hello1);

const isLoggedIn = true;
const hasPermission = false;

if(isLoggedIn && hasPermission){
    console.log('Item Deleted Succefully');
}else{
    // if hasPermission = false;
    console.log('An Error');
}

// 2. Logical OR (||)

// const happy = true || false;
const happy = false || true;

console.log('happy:', happy);

// 3. Logical NOT (!)
const unHappy = false;

console.log('unHappy:', !unHappy);

const animal = 'Cat';

console.log('animal:', !animal);

// Conditinal Operators (Ternary Operators)

const userRole = 'Admin';

if(userRole === 'admin'){
    console.log('You are an Admin');
}else{
    console.log('You are not an Admin');
}

userRole === 'admin' ? console.log('You are an Admin') : console.log('You are not an Admin');

// Comparison Operators

// Equal (==)
console.log('Equal:', 4 == 4); // True
console.log('Equal:', 4 == 5); // False

// Not Equal (!=)
console.log('Not Equal:', 4 != 4); // False
console.log('Not Equal:', 4 != 5); // True

// Strict Equal (===)
console.log('Strict Equal:', 4 === 4); // True
console.log('Strict Equal:', 4 === 5); // False
console.log('Strict Equal:', 4 === '4'); // False (check the data type)

// Strict Not Equal (!==)
console.log('Strict Not Equal:', 4 !== 4); // False
console.log('Strict Not Equal:', 4 !== 5); // True
console.log('Strict Not Equal:', 4 !== '4'); // True (check the data type)
console.log('Strict Not Equal:', 4 !== '5'); // True (check the data type)

// Greter Than (>)
console.log('Greter Than:', 4 > 5); // False
console.log('Greter Than:', 6 > 5); // True

// Greter Than or Equal (>=)
console.log('Greter or Equal Than:', 4 >= 5); // False
console.log('Greter or Equal Than:', 6 >= 5); // True

// Less Than (<)
console.log('Less Than:', 4 < 5); // True
console.log('Less Than:', 6 < 5); // False

// Less Than or Equal (<=)
console.log('Less or Equal Than:', 4 <= 5); // True
console.log('Less or Equal Than:', 6 <= 5); // False

