// 	var yellow=  document.getElementById("square");
// function turnBlue(){
// 	yellow.style.backgroundColor="blue";
// };

// function toYellow(){
	
// 	yellow.style.backgroundColor="yellow";
// };






// function turnBoxRed(){
	
// 	yellow.style.backgroundColor="red";
// };

// var inputTag = document.getElementByTagName(input);

// function validatingFields{

// }

// var inputTags = document.getElementsByTagName("input");
// alert(inputTags[2].value);

var currentTime = document.getElementById("display_current_time");
function showDate(){
	var date = new Date();
	currentTime.innerHTML = date
}

setInterval(showDate, 1000)