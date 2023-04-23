// declaring my variables and then placing then in my html document 

//declare and instantiate a variable to hold your name
let myName = 'Ana Nayeli Sanchez Banuelos';
//place the value of the name variable into the HTML file
document.querySelector('#name').textContent= myName ;
//declering year 
let yearnow= '2022'
document.querySelector('#year').textContent = yearnow ;
// pic 
let myPicture = 'images/anasanchez.jpg';
document.querySelector('img').setAttribute('src', myPicture);

//modifycation date and time 
let oLastModif = new Date(document.lastModified);
document.querySelector('#datetime').textContent= oLastModif ;
