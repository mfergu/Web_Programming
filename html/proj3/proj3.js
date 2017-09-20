//setup document
console.log("connected!");
document.querySelector("title").innerText = " Project 3";
var body = document.querySelector("body");
var num_input = document.createElement("input");
num_input.type = "string";
num_input.value = "";
body.appendChild(num_input);

//global vars for state of items
var total_nums = 0;
var buttons = [[],[],[],[],[]];
var display_str = "";

//balances user and CPU input 
var clicker = function(add_to_display){
	total_nums++;
	display_str += add_to_display;
	document.querySelector("input").value = display_str;
	console.log(total_nums + " is size of input");
	console.log( display_str + " is the total number");
	console.log(add_to_display + " is added to the display_str");
}

//called from zero-line submit button function pointer
var submit = function(){
	//format and submit the number to the API

}

function _zero_line(){
	var row = document.createElement("div");
	body.appendChild(row);
	for(var x = 0; x < 3; x++){
		console.log(x + "0");
		buttons[3][x] = {
			value: 1 + x + (y*3),
			domNode: document.createElement("button")
		};
		switch(x){
			case 0: buttons[3][x].domNode.innerText = "*";
				buttons[3][x].value = "*"; break;
			case 1: buttons[3][x].domNode.innerText = "0"; 
				buttons[3][x].value = 0; break;
			case 2: buttons[3][x].domNode.innerText = "#"; 
				buttons[3][x].value = "#"; break;
			default: console.log("error in _zero_line");
		}
//		console.log("buttons[3][" + x + "] value is " + buttons[3][x].value);
		body.appendChild(buttons[3][x].domNode);
//		buttons[3][x].domNode.onclick = clicker;
		buttons[3][x].domNode.onclick = clicker.bind(null, buttons[3][x].value);
	}
//work on the submit function
//	buttons[4][0]
}

//setup numpad
for(var y = 0; y < 3; y++) {
    var row = document.createElement("div");
	body.appendChild(row);
	for( var x = 0; x < 3; x++){
		buttons[x][y] = {
			value: 1 + x + (y*3),
			domNode: document.createElement("button")
		};
			
		buttons[x][y].domNode.innerText = buttons[x][y].value;
		body.appendChild(buttons[x][y].domNode);
//		buttons[x][y].domNode.onclick = clicker;
		buttons[x][y].domNode.onclick = clicker.bind(null, buttons[x][y].value);

		//zero is a pain in the ass
		if(1 + x + (y*3) == 9){
			_zero_line();
		}
	}
}