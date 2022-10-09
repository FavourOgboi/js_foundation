/*Styling using the getElementByTagName('Tagname')*/ 

const headings = document.getElementsByTagName('h2');
headings[1].style.color = 'red';
console.dir(headings.length);
console.dir(headings);

//styling element in a list

const items = document.getElementsByTagName('li');

// changing a node list to an array
const betterItems = [...items];

betterItems.forEach(function(item){
    console.log(item);
});
console.log(betterItems);
//styling item in a list

items[2].style.color = 'cyan';