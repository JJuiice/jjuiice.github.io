const p8 = document.querySelector("#P8");
const p9 = document.querySelector("#P9");

const pin_selects = document.querySelector("#pin-selects");
const pin_select_p8 = document.querySelector("#pin-select-p8");
const pin_select_p9 = document.querySelector("#pin-select-p9");

const mode_selects = document.querySelector("#mode-selects");

function showSelect(select_val) {
	const selects = document.querySelectorAll("#mode-selects select");
	for (var i = 0; i < selects.length; i++)
		selects[i].style.display = "none";
	document.querySelector("#" + select_val).style.display = "block";
}

p8.onclick = function () {
	pin_selects.className = "p8";
	mode_selects.className = "p8";
	showSelect(pin_select_p8.value);
};

p9.onclick = function () {
	pin_selects.className = "p9";
	mode_selects.className = "p9";
	showSelect(pin_select_p9.value);
};

pin_select_p8.onchange = function () {
	mode_selects.className = "p8";
	showSelect(pin_select_p8.value);
};

pin_select_p9.onchange = function () {
	mode_selects.className = "p9";
	showSelect(pin_select_p9.value);
}
