// DOM 

//declare and instantiate a variable to hold your name
let myName = 'Ana Nayeli Sanchez Banuelos';
//place the value of the name variable into the HTML file
document.querySelector('#name2').textContent= myName ;
//modifycation date and time 
let oLastModif = new Date(document.lastModified);
document.querySelector('#modify').textContent= oLastModif ;
// mobile screenshots
let Picture1 = 'images/Odd_pears.jpg';
document.querySelector('#img').setAttribute('src', Picture1);
let Picture2 = 'images/Academy.jpg';
document.querySelector('#img2').setAttribute('src', Picture2);
let Picture3 = 'images/Academy.jpg';
document.querySelector('#img3').setAttribute('src', Picture3);

