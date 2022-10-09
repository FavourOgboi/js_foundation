const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColors(){
    let hasClass = heading.classList.contains('red');
    if (hasClass){
        heading.classList.remove('red');
    } else {
        heading.classList.add('red');
    }
}
 
btn.addEventListener('click',changeColors);

/**other event listeners */

btn.addEventListener('click',function(){
    console.log('You clicked me');
});
btn.addEventListener('mousedown',function(){
    console.log('down');
});
btn.addEventListener('mouseup',function(){
    console.log('up');
});
btn.addEventListener('mouseenter',function(){
    console.log('enter');
});
btn.addEventListener('mouseleave',function(){
    console.log('leave');
});


// const parag = document.querySelector('p');
// btn.addEventListener('mouseenter',function(){
//     parag.classList.add('blue');
// })
// btn.addEventListener('mouseleave',function(){
//     parag.classList.remove('blue');
// })


// keyup
//keydown
//keypress

const nameInput = document.getElementById('name');

nameInput.addEventListener('keypress',function(){
    console.log('you pressed a key');
})
nameInput.addEventListener('keydown',function(){
    console.log('you pressed a key<keydown>');
})
// nameInput.addEventListener('keyup',function(){
//     console.log('you pressed a keyup');
// })

nameInput.addEventListener('keyup',function(){
    // returnin the value entered
    console.log(nameInput.value);
})


// others (even object arguements)

const h1 = document.querySelector('h1');
const button = document.querySelector('.atn');

button.addEventListener('click',function(event){
    h1.classList.add('blue');
    event.currentTarget.classList.add('blue');
});

// To prevent page refresh whenever you click  a link

const prev = document.querySelector('link');

button.addEventListener('click',function(event){
    prev.preventDefault();
});

// this keywords
// can be used to select an element buts is confusing
//check vid 9:30 to see how it works 