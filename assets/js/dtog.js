const p8 = document.querySelector("#P8");
const p9 = document.querySelector("#P9");
const pin_selects = document.querySelector("#pin-selects")

p8.onclick = function () {
	pin_selects.className = "p8";
};

p9.onclick = function () {
	pin_selects.className = "p9"
};
