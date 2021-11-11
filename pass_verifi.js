// pass_verifi.js
// EECS 448 lab 8
//
// date: Nov 10, 2021
// author: Adam Abernathy
// KUID: 2876941
//
// verifies tow inputs match
//


document.addEventListener("DOMContentLoaded", () => {
	//get input values and math operation to use
	let input1 = document.querySelector("#input1");
	let input2 = document.querySelector("#input2");

	document.querySelector("#computeButton").addEventListener("click", (e) => {
		//for troubleshooting
		console.log('click');
		console.log('input1', input1.value);
		console.log('input2', input2.value);

    if (input1.value == input2.value) {
      result = "PASSWORDS MATCHED";
    } else {
      result = "PASSWORDS UNMATCHED";
    }
    document.querySelector("#result").innerText = result;
	});
});
