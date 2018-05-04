// JavaScript Document
/*use 'esversion:6'*/
const menuBtn = document.getElementById('btn-menu');
const closeBtn = document.getElementById('btn-close');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {			
	menu.style.width = '250px';
});
closeBtn.addEventListener('click', () => {
	menu.style.width = '0px';
});


//Set Active Class
const links = document.querySelectorAll('nav a');
function makeActive () {
	for (let i = 0; i < links.length; i++) {
		links[i].classList.remove('active');
	}
	this.classList.add('active');
}

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('click',makeActive);
}