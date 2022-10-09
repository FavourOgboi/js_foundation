
//create empty element
const bodyDiv = document.createElement(('div'));
// create text node
const text = document.createTextNode('a simple div');
//put text in div
bodyDiv.appendChild(text);
// append bodydiv into the body and document
document.body.appendChild(bodyDiv);

// adding a child to the div in html tag
const result = document.querySelector('#result');
// checking the children result has
console.log(result.children);

// create the element
const element = document.createElement('h2');
// create a text in the h1 element
const value = document.createTextNode('This is a new h1 tag created dynamically using js');
// place value in the h1 element
element.appendChild(value);
element.classList.add('blue');
//place element in div tag
result.appendChild(element);
// checking the children result has
console.log(result.children);



/**Working with another way using
insertbefore("element","location"); */

// using append child
const elem = document.createElement('a');
// setting a href to it as an attribute
elem.setAttribute('href','www.google.com');
const val = document.createTextNode('google link');
elem.appendChild(val);
document.body.appendChild(elem);

// using inserBefore
const elem2 = document.createElement('a');
// setting a href to it as an attribute
elem2.setAttribute('href','www.wikipedia.com');
//put element in document
document.body.appendChild(elem2);
//crate text
const val2 = document.createTextNode('wikipedia link');

document.body.insertBefore(val2,elem2);

//or
 
//inserting a text into the div result 

document.body.insertBefore(val2,result);
// at the top of the parent tag


// replacing 

const smallh4 = document.createElement('h4');
const smalltxt = document.createTextNode('This is replaced a text');
smallh4.classList.add('red');
smallh4.appendChild(smalltxt);
document.body.replaceChild(smallh4,bodyDiv);