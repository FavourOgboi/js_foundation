/** working with event bubbling ,
 *  propagation and capturing*/

// helps to select element  dynamically


// target 
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');
// console.log(heading);
function sayHello(){
    console.log('Hello there');
}

btn.addEventListener('click',function(){
    const element = document.createElement('h1');
    element.classList.add('heading');
    element.textContent = 'I am inside the container';
    container.appendChild(element);
});

container.addEventListener('click',function(e){
    if (event.target.classList.contains('heading')){
        console.log("hello");
    }
});

// heading.addEventListener('click',sayHello);