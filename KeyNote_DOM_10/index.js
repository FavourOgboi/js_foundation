
//innerHtml
//textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.textContent);
console.log(div.innerHTML);
console.log(list.innerHTML);

// creating another ul and grabing the list into it
const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">text</li>
<li>list item</li>`;
document.body.appendChild(ul);
 

//can change div
div.textContent = 'hello';


// css styling with js
const random = document.querySelector('.random');
console.log(random.style); // style property

random.style.backgroundColor = 'blue';
random.style.color = 'white';
random.style.fontsize = '3rem';
random.style.textTransform = 'capitalize';

//using classList

random.classList.add('title');