/*Styling using the getElementByClassName('class name')*/ 

const item = document.getElementsByClassName('special');
item[0].style.color = "blue";

// styling using querySelector and queerySelectorAll

const allList = document.querySelector('#result');
allList.style.backgroundColor= 'red';

// first class selector with special

const items = document.querySelector('.special');
console.log(items);

// last list in ul 

const last = document.querySelector('li:last-child');
last.style.color = 'white'
console.log(last);

//prints all the class with special

const list = document.querySelectorAll('.special');
console.log(list);
// styling the second element that starts with special 
list[2].style.color='orange'

list.forEach(function(li){
    console.log(li);
})
