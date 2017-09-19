console.log("connected!");
document.querySelector("title").innerText = " Project 3";
var body = document.querySelector("body");
var num_input = document.createElement("input");
body.appendChild(num_input);
var buttons = [[],[],[]];
var input_num;

for(var y = 0; y < 3; y++) {
    var row = document.createElement("div");
		body.appendChild(row);
		for( var x = 0; x < 3; x++){
			buttons[x][y] = {
				value: x+y,
				domNode: document.createElement("button")
			};
			buttons[x][y].domNode.innerHTML = buttons[x][y].value;
			body.appendChild(buttons[x][y].domNode);
//			buttons[x][y].domNode.onclick = clicker;
//			buttons[x][y].domNode.onclick = clicker.bind(null,x,y);
		}
	}
