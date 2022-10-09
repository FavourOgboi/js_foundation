/** working with event bubbling ,
 *  propagation and capturing*/

// helps to select element  dynamically

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function bubbling(e){
    console.log('current target',e.currentTarget);
    console.log('target',e.target);
    // if (e.target.classList.contains('link')){
    //     console.log('you clicked on the link');
    // };
    console.log('you clicked on a link');
};

function stopPropagation(e){
    console.log("you clicked on a link");
    e.stopPropagation();
}

list.addEventListener('click',stopPropagation,{capturing:true});
list.addEventListener('click', bubbling);
// container.addEventListener('click', bubbling);