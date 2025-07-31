// Arrays with Loop
const actors = [
    {
        name: 'Act 1',
        payment: '1000'
    },
    {
        name: 'Act 2',
        payment: '2500'
    },
    {
        name: 'Act 3',
        payment: '1800'
    },
    {
        name: 'Act 4',
        payment: '5000'
    },
];

// For Loop

// for(let i = 0; i < actors.length; i++){
//     actors[i].payment = actors[i].payment - 10;
// }
// console.log('Actors:', actors);

// For Each Loop

// actors.forEach((actor) => {
//     actor.payment = actor.payment - 10;
// });
// console.log(actors);

// For of Loop

// for (let actor of actors){
//     actor.payment = actor.payment - 10;
// }
// console.log(actors);

// Filter

const reachAct = actors.filter((actor) => {
    if(actor.payment > 3000){
        return true;
    }else{
        return false;
    }

    // Another way

    // return actor.payment > 3000;
});

console.log(reachAct);

// Map

const users = [
    {
        fname: 'John',
        lname: 'Doe'
    },
    {
        fname: 'Jani',
        lname: 'Doe'
    }
];

console.log('Users:', users);

const finalUser = users.map((user) => {
    return {
        // fullName: user.fname +' '+ user.lname

        // another way
        fullName: `${user.fname} ${user.lname}`
    };
});
console.log('Final User:', finalUser);


// Reduce

const movies = [
    {
        name: 'movie 1',
        budget: 100
    },
    {
        name: 'movie 2',
        budget: 150
    },
    {
        name: 'movie 3',
        budget: 300
    }
];

console.log('Movies:', movies);

// let total = 0;

// movies.forEach((movie) => {
//     //total = total + movie.budget;
//     // Another Way
//     total += movie.budget;
// });



console.log('Total:', total);