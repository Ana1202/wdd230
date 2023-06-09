
//Logo
let siteLogo = 'images/sitelogo.png';
document.querySelector('img').setAttribute('src', siteLogo);


// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

// footer last modified
//modifycation date and time 
let yearnow= '2023'
document.querySelector('#year').textContent = yearnow;

let oLastModif = new Date(document.lastModified);
document.querySelector('#lastModified').textContent= oLastModif ;
//modifycation date and time 

// toggle menu for the hambuger menu

function toggleMenu(){
document.getElementById('primarynav').classList.toggle('open');
document.getElementById('hambutton').classList.toggle('open');
}
const x = document.getElementById('hambutton')
x.onclick = toggleMenu;

// banner only on Monday and tuesday 
const mybanner = () => {
	document.querySelector("banner").style.display = "block";
  };

  if (dayNumber === 1 || dayNumber === 2) {
	banner();
  }
  
  console.log (dayNumber);