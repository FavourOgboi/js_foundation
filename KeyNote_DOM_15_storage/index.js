// submit event listerner
// prevent default 
//how to check a value

const form =  document.getElementById('form');
const name =  document.getElementById('name');
const password =  document.getElementById('password');

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('form submitted');
    console.log(name.value);
    console.log(password.value);
});
