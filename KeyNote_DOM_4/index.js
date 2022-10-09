/** working with childNodes */

const result = document.querySelector('#result');
const allChildren = result.children;
console.log(allChildren);
console.log(result.firstChild);
console.log(result.lastChild);

/** working with parent eg <div>*/

const head = document.querySelector('h2');
console.log(head.parentElement.parentElement);

const parent = head.parentElement;
parent.style.color = 'red' 

/**previous siblongs and next siblings properties */

const first = document.querySelector('.first');
/*nextSibling.nextSibling to avoid white spaces*/
const second = first.nextSibling.nextSibling;
second.style.color = 'red';
console.log(second);

//or preferably

const element = document.querySelector('#p');
const nextElement= element.nextElementSibling;
nextElement.style.color = 'blue'; 

const last = document.querySelector('.last');
/*nextSibling.nextSibling to avoid white spaces*/
previousAfterLast = last.previousElementSibling;
previousAfterLast.style.color = 'magenta';
