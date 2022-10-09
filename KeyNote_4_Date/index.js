const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const days = [
    'Monday',"Tuesday","Wednesday",'Thursday','Friday','Saturday','Sunday'
]


let date = new Date();
const stringDate = date.toDateString();

document.body.innerHTML = stringDate;

// setting date
let date2 = new Date('04/21/2003').toDateString().slice(0,15).trim();

document.body.innerHTML = date2;


