const btns = document.querySelectorAll('.btn');
// for each btn add an event
btns.forEach(function (btn) {
    btn.addEventListener('click',function(e){
        // using currentTarget

        console.log(e.currentTarget);
        // e.currentTarget.style.color = 'green';

        console.log('target',e.target);
        e.target.style.color = 'red';
    });
});

/** working with event bubbling ,
 *  propagation and capturing*/

// helps to select element  dynamically

