const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
//finding the name of its class selector
const classVal = first.className;
console.log(classVal);

// changing the class name of the second text
// changing the class name and making both implimented

second.className = 'colors text';

// using classList and adding 2 classes but they aren't
//over writing one another

third.classList.add('colors');
third.classList.add('text');
//we can also
third.classList.add('colors','text');
//we can remove a class 
third.classList.remove('colors');

let result = third.classList.contains('colors');
if (result){
    alert('hello');
} else{
    alert('hi');
}