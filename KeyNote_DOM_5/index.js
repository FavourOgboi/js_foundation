// working with the text content

const item = document.getElementById('special');
const text = item.firstChild.nodeValue;
console.log(text[0]); //t

//Or

const easyValue = item.textContent;
console.log(easyValue); // this is a text

// Working with attributes

const att = document.querySelector('.first');
const classValue = att.getAttribute('class')
console.log(classValue); // first

const attId = document.querySelector('.first');
const idValue = att.getAttribute('id')
console.log(idValue); // first

const link = document.getElementById('link');
const show = link.getAttribute('href');
console.log(show);

// set an attribute to an element

const last = link.nextElementSibling;
last.setAttribute('class','first');
console.log(last.textContent);
// changing the text content
last.textContent = "I now have a class attribute of first";
console.log(last)
console.log(last.textContent);
