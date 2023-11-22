//your JS code here. If required.

let container = document.querySelector(".container");

for(let i = 1; i <= 20; i++){
	let div = document.createElement('div');
	div.className = 'row';
	for(let j = 1; j <= 40; j++){
		let square = document.createElement('div');
		square.className = 'square';
		square.addEventListener('mouseenter', changeColor);
		square.addEventListener('mouseout', changeColorDefault);
		div.appendChild(square);
	}
	container.appendChild(div);
}
function hex(){
	let red = Math.floor(Math.random()*255).toString(16);
	let green = Math.floor(Math.random()*255).toString(16);
	let yellow = Math.floor(Math.random()*255).toString(16);
	return `#${red}${green}${yellow}`;
}

function changeColor(event){
	let elem = event.target;
	elem.style.backgroundColor = hex();
	// elem.style.transition = "background-color 1s ease";
}
function changeColorDefault(event){
	let elem = event.target;
	elem.style.backgroundColor = "#1D1D1D";
	elem.style.transition = "background-color 1s ease";
}