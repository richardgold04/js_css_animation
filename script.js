function pageLoad() {

	let myObjects = [
		{
			tag: "h1",
			content: "Arany Richárd"
		},
		{
			tag: "p",
			content: "Frontend Developer"
		}
	];
/*
	for(let i = 0; i < myObjects.length; i++){

	}
*/

	let root = document.querySelector(".root")

	for(o of myObjects){
		
		root.insertAdjacentHTML("beforeend", `<${o.tag}>${o.content}</${o.tag}>`)

	}

	root.addEventListener("click", function (){
		root.classList.toggle("clicked")
	});

}
window.addEventListener("load", pageLoad);