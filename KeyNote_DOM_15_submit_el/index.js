// working with browser storage

localStorage.setItem('name','james');
//overwrite if the key is the name
localStorage.setItem('name','favour'); // this is what we be saved
localStorage.setItem('father','felix');
localStorage.setItem('mother','roseline');
sessionStorage.setItem('girlfriend','debbie');
sessionStorage.setItem('friend','fulness');

// accessing them
const name = localStorage.getItem('name');
const girlfriend = sessionStorage.getItem('girlfriend');
console.log(`${name} weds ${girlfriend}`);
// remove

//localStorage.removeItem('key name');

//localStorage.clear() deletes all

// JSON.stringfy, JSON.perse() to get u items of list

const friends = ['nehimiah',"williams","Emmanuel"];

sessionStorage.setItem('friends', JSON.stringify(friends));

const value = JSON.parse(sessionStorage.getItem('friends'));
console.log(value[0]);

// checking if value is already in storage 

let fruits;

if (localStorage.getItem("fruits")){
    fruits = JSON.parse(localStorage.getItem('fruits'));
}
else{
    fruits = []
}

console.log(fruits);
fruits.push('orange');
localStorage.setItem("fruits",JSON.stringify(fruits));