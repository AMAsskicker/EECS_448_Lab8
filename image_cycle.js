// image_cycle.js
// EECS 448 lab 8
//
// date: Nov 11, 2021
// author: Adam Abernathy
// KUID: 2876941
//
// cycles through images in folder ./image/
//


document.addEventListener("DOMContentLoaded", () => {
	//get input values and math operation to use
	// let input1 = document.querySelector("#input1");
	// let input1 = document.getElementById('input1').value;
	// let input2 = document.querySelector("#input2");
	// let current = document.getElementById('image_blk').src;

	document.querySelector("#reverse").addEventListener("click", (e) => {
    let current = document.getElementById('image_blk').src;
		//for troubleshooting
		console.log('click');
    console.log('image src', current)
    switch (current) {
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_1.jpeg":
        console.log("match")
        new_img = "./image/image_6.jpeg"
        break;
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_2.jpeg":
        console.log("match")
        new_img = "./image/image_1.jpeg"
        break;
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_3.jpeg":
        console.log("match")
        new_img = "./image/image_2.jpeg"
        break;
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_4.jpeg":
        console.log("match")
        new_img = "./image/image_3.jpeg"
        break;
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_5.jpeg":
        console.log("match")
        new_img = "./image/image_4.jpeg"
        break;
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_6.jpeg":
        console.log("match")
        new_img = "./image/image_5.jpeg"
        break;
      default:
        new_img = "./image_1.jpeg"
    }
    document.getElementById("image_blk").src = new_img;
	});

  document.querySelector("#forward").addEventListener("click", (e) => {
    let current = document.getElementById('image_blk').src;
		//for troubleshooting
		console.log('click');
    console.log('image src', current)
    switch (current) {
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_1.jpeg":
        console.log("match")
        new_img = "./image/image_2.jpeg"
        break;
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_2.jpeg":
        console.log("match")
        new_img = "./image/image_3.jpeg"
        break;
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_3.jpeg":
        console.log("match")
        new_img = "./image/image_4.jpeg"
        break;
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_4.jpeg":
        console.log("match")
        new_img = "./image/image_5.jpeg"
        break;
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_5.jpeg":
        console.log("match")
        new_img = "./image/image_6.jpeg"
        break;
      case "file:///Users/adamabernathy/Documents/Code/EECS_448/EECS_448_Lab8/image/image_6.jpeg":
        console.log("match")
        new_img = "./image/image_1.jpeg"
        break;
      default:
        new_img = "./image_1.jpeg"
    }
    document.getElementById("image_blk").src = new_img;
	});
});
