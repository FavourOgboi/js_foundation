function addvalues(num1,num2){
    return num1+num2;
}

const solution =  addvalues(3,4);

console.log(solution);

//OR

const answer = function addvlues(num1,num2){
    return num1+num2;
}

console.log(answer(2,3));

let valresult = answer(3,6);
console.log(valresult);

//or

const multiply = (num1,num2) => num1 * num2;
console.log(multiply(5,8));

// Declearing an object

const person = {
    name:"Lionel",
    last_name:"messi",
    siblings:["susan","ronaldo","iniesta"],
    age: 38,
    married:true,
    country:function (){
        console.log("Argentina");
    }
};

console.log(person.name);
console.log(person.siblings[2]);
console.log(person.country);
console.log(person.country());
person.country();
const age = person.age
console.log(age);

console.log(6 != "6" && 4 > 4);

// Switch statement

const dice =  1;

switch(dice){
    case 1: console.log("you gat 1"); break;
    case 2: console.log("you gat 2");
    case 3: console.log("you gat 3");
    case 4: console.log("you gat 4");
    case 5: console.log("you gat 5");
    case 6: console.log("you gat 6");
}

// WHILE LOOP

let amount = 10;

while (amount > 0) {
    console.log('I have' + amount + "dollars");
    amount--;
}

// DO WHILE LOOP
let money = 0;

do {
    console.log(money);
    money++;
} while (money < 10);

// FOR LOOP

for(let i = 0 ; i<10; i++){
    console.log("hey" + i);
}

//some string methods
let a = " peter";
let b = a.trim();
console.log(a);
console.log(b);
console.log(a.startsWith(" "));
console.log(b.startsWith("t"));
console.log(b.includes('oo'));
console.log(b.slice(-3,-2));

//piece work

const names =  ['anna','susy','bob','json'];
const lastname = 'shakeandnake';
let newArray = [];

for(let i = 0;i < names.length;i++){
    let first_name = names[i];
    let full_name = first_name+" "+lastname;
    newArray.push(full_name);
}

console.log(newArray);

const gas = [20,40,100,30];
const food = [10,20,40];

function calculateTotal(arr){
    let total = 0;
    for( let num = 0;num < arr.length;num++){
        total += arr[num];
    }
    return total;
}

console.log(calculateTotal(gas));

let foodTotal = calculateTotal(food);
console.log(foodTotal);

//printing them as an object
console.log({
    gas: calculateTotal(gas)  ,
    food : foodTotal
});

//checking primitive immutability (if yau wana copy and affect)


let vars = "hshsh";
console.log({
    ans1:vars.replace('h','y'),
    ans2: vars
});
// OR 
let aav = 1;
let bvv = aav;
console.log({
    a: aav,
    b: bvv
})
bvv = 7;
// checking if the change affects aav
console.log({
    aav:aav,bvv:bvv
});
// didnt change the original variable. number is also
// a primitive data type

let namess =  "yooe";
namess = 'jessi'
console.log(namess);

// how to cal a varable from a func
function agee(){
    bal = 35;
}
agee();
console.log(bal);