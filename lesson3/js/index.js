// Setting up my variables 
//Logo
let siteLogo = 'images/sitelogo.png';
document.querySelector('img').setAttribute('src', siteLogo);
//domain
let siteDomain= 'www.evanstownchamber.com';
document.querySelector('#domain').textContent= siteDomain;
//declering year 
let yearnow= '2022'
document.querySelector('#year').textContent = yearnow ;
//modifycation date and time 
let oLastModif = new Date(document.lastModified);
document.querySelector('#modify').textContent= oLastModif ;
