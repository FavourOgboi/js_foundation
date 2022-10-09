// creating an h2element infront of the h1

const h2 = document.createElement('h2');
h2.innerText = 'I am a dynamic heading';
document.body.prepend(h2);

//How to removing element

const result = document.querySelector('#result');
result.remove();

//or 

// h1 in the element with id = result
const head = result.querySelector('h1');
// in the element of id = result remove first h1
result.removeChild(head); 
console.log(head);