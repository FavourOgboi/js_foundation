// CALL BACK FUNC 6:00 hrs

function callback(){
    console.log('called function');
}

function caller(name,callbackfunc){
    const myname = "Vincent";
    console.log(`${myname} is who i am, all -> `);
    // calling the function back
    callback();
}

caller('bobo',callback);

// FOR EACH

const people = [
    {name:'bob', age: 20, position: 'developer'},
    {name:'anst', age: 25, position: 'designer'},
    {name:'suzy', age: 30, position: 'boss'}
];

function showPerson(person){
    console.log(person);
}

people.forEach(showPerson);

// MAP METHOD

const mapFunc = people.map(function(people){
    return people.age + 20;
});
console.log(mapFunc);

// FILTER METHOD

const filterFunc = people.filter(function(people){
    return people.age > 20;
});
console.log(filterFunc);

//FIND

const names = ['bob','peter','susy'];

console.log(
    names.find(function (name){
        return name === 'susy';
    })
);

// REDUCE

const list = [
    {salary:30},
    {salary:40},
    {salary:32}
]

const total = list.reduce(function(acc,curItem){
    console.log(`total : ${acc}`);
    console.log(`current money : ${curItem.salary}`);
    acc = acc + curItem.salary;
    return acc;
},0)
console.log(`The total salary of employers is ${total}`);