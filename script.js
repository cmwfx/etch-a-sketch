const sketchContainer = document.querySelector(".sketch-container");

let colorInput = document.querySelector("#favcolor");
let colorValue;

let sizeSlider = document.querySelector("#sizeSlider");
let sizeValue;

let sizeValueText = document.querySelector("#sizeValue");

document.getElementById("sizeSlider").addEventListener("input", function () {
	sizeValue = sizeSlider.value;
	sizeValueText.textContent = `${sizeValue} x ${sizeValue}`;
	document.querySelectorAll(".sketch-container").forEach((container) => {
		container.innerHTML = "";
	});
	drawSketch();
	console.log(sizeValue);
});

document.querySelector(".clear").addEventListener("click", function () {
	document.querySelectorAll(".sketch-container").forEach((container) => {
		container.innerHTML = "";
	});
});

document.getElementById("favcolor").addEventListener("input", function () {
	const colorInput = document.getElementById("favcolor");
	colorValue = colorInput.value;
});
let drawSketch = () => {
	for (let i = 0; i < sizeValue; i++) {
		//create etch a sketch row
		const sketchContainerDiv = document.createElement("div");
		sketchContainerDiv.classList.add("sketchContainerDiv");
		sketchContainer.appendChild(sketchContainerDiv);
		for (let j = 0; j < sizeValue; j++) {
			//create etch a sketch row item
			const sketchContainerInnerDiv = document.createElement("div");
			sketchContainerInnerDiv.classList.add("sketchContainerInnerDiv");
			sketchContainerDiv.appendChild(sketchContainerInnerDiv);
			sketchContainerInnerDiv.addEventListener("mouseover", () => {
				sketchContainerInnerDiv.style.backgroundColor = colorValue;
			});
		}
	}
};
