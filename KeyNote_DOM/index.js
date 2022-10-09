/* stying in the body of the html
styling the background of the html here
*/
document.body.style.backgroundColor = "blue";
// style text colour
document.body.style.color = "white";

// style the btn2 text colour
document.getElementById('btn2').style.backgroundColor = 'red';

//OR

/* using variables when we have multiple task
and we dont wanna call each time*/

const element = document.getElementById('btn2');

// do something to it
element.style.color = 'yellow';

//  we have access to a global window object once we open
// our window in the browser
// window object
console.log(Window);

/*once we select an element either like a 
variable or any other way
we get a node object which is like an array like object
*/
const btn = document.getElementById('btn');
const namez = btn.nodeName;
const css = btn.style;

console.log(btn);
console.log(namez);
console.log(css);
console.dir(document);

// styling h1 tag

const h1 = document.getElementById(title);
h1.style.color = 'white'

document.getElementById('btn2').style.backgroundColor = "blue";






















