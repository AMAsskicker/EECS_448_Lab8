// style_change.js
// EECS 448 lab 8
//
// date: Nov 13, 2021
// author: Adam Abernathy
// KUID: 2876941
//
// changes style of the web page
//


document.addEventListener("DOMContentLoaded", () => {
	//get input values and math operation to use
	let border_color = document.querySelector("#border_input");
	let back_color = document.querySelector("#background");
	var back_2_change = document.getElementById('paragraph')

	document.querySelector("#apply_but").addEventListener("click", (e) => {
		//for troubleshooting
		console.log('click');
		console.log('border_color', border_color.value);
		console.log('back_color', back_color.value);
		var new_back_color, new_border_color

		switch (border_color.value) {
			case "red":
				new_border_color = "3px solid red"
				break
			case "green":
				new_border_color = "3px solid green"
				break
			case "blue":
				new_border_color = "3px solid blue"
				break
			case "width":
				new_border_color = "3px solid yellow"
				break;
			default:
				new_border_color = "3px solid white"
		}
		switch (back_color.value) {
			case "red":
				new_back_color = "red"
				break
			case "green":
				new_back_color = "green"
				break
			case "blue":
				new_back_color = "blue"
				break;
			default:
				new_back_color = "white"
		}

    back_2_change.style.background = new_back_color
		back_2_change.style.border = new_border_color
	});
});
