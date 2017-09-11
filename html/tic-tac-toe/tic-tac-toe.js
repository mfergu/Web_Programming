var dom = document.querySelector("div");
var buttons = [[],[],[]];
var cpu_first = false;
var cpu_turn = false;
var xturn = true;
var won = false;
var turns = 0;

//modifies the logical board in JS and the nodes in HTML for player and CPU input
function checkAndUpdate(x,y){

	
	if( xturn == true && buttons[x][y].value == "_"){
		buttons[x][y].value = "X";
		xturn = false;
	} else if ( xturn == false && buttons[x][y].value == "_"){
		buttons[x][y].value = "O";
		xturn = true;
	}

	console.log(x + " " + y);
	buttons[x][y].domNode.innerHTML = buttons[x][y].value;

}

//balances user and CPU input 
var clicker = function(x,y){

	turns++;
	console.log("turns " + turns);
//	console.log("the value of the clicked button is ++buttons[" + x + "][" + y + "]" );
//	console.log("total number of turns are: " + turns);
	if(cpu_turn){
		var temp_arr = getCPU();
		checkAndUpdate(temp_arr[0],temp_arr[1]);
		checkForWinner();
		cpu_turn = false;
	} else {
		checkAndUpdate(x,y);
		checkForWinner();
		cpu_turn = true;
		var temp_x = 0;
		var temp_y = 0;
		clicker(temp_x, temp_y);
	}
	
}

//instantiates all the necessary objects and variables
function createBoard(){
        for(var y = 0; y < 3; y++) {
		var row = document.createElement("div");
		dom.appendChild(row);
		for( var x = 0; x < 3; x++){
			buttons[x][y] = {
				value: "_",
				domNode: document.createElement("button")
			};
			buttons[x][y].domNode.innerHTML = buttons[x][y].value;
			dom.appendChild(buttons[x][y].domNode);
			buttons[x][y].domNode.onclick = clicker;
			buttons[x][y].domNode.onclick = clicker.bind(null,x,y);
		}
	}

		var cpu = document.createElement("div"); 
		dom.appendChild(cpu);
		cpu = document.createElement("button");
		cpu.onclick = function(){
			xturn = false;
			cpu_first = true;
			cpu_turn = true;
			var temp_x = 0;
			var temp_y = 0;
			clicker(temp_x, temp_y);
		};
		cpu.innerHTML = "Let the Computer go First";
		dom.appendChild(cpu);
}

function horWin(){
	for(var i = 0; i < 3; i++){
		if(buttons[0][i].value != "_"){
			if((buttons[0][i].value == buttons[1][i].value) && (buttons[1][i].value == buttons[2][i].value)){
				console.log("winner");
				return [true,buttons[0][i].value];
			}
		}
	}
	return [false,0];

}

function verWin(){
	for(var i = 0; i < 3; i++){
		if(buttons[i][0].value != "_"){
			if((buttons[i][0].value == buttons[i][1].value) && (buttons[i][1].value == buttons[i][2].value)){
				console.log("winner");
				return [true,buttons[i][0].value];
			}
		}
	}
	return [false,0];
}

function diaWin(){
	if(buttons[1][1].value != "_"){
		if((buttons[0][0].value == buttons[1][1].value)&&(buttons[1][1].value == buttons[2][2].value)){
			console.log("winner");
			return [true,buttons[1][1].value];
		}
		       
		if((buttons[2][0].value == buttons[1][1].value)&&(buttons[1][1].value == buttons[0][2].value)){
			console.log("winner");
			return [true,buttons[1][1].value];
		}
	}
	return [false,0];
}

//checks board for a winner
function checkForWinner(){
	temp = [[],[],[]];
	temp[0] = horWin();
	temp[1] = verWin();
	temp[2] = diaWin();
	
	if( temp[0][0] || temp[1][0] || temp[2][0]){
		var winrar = "";
		if(temp[0][0] == true){
			winrar = temp[0][1];
		}
		if(temp[1][0] == true){
			winrar = temp[1][1];
		}
		if(temp[2][0] == true){
			winrar = temp[2][1];
		}
		if(winrar == "O"){
			console.log( "you lose!");
			dom.innerHTML = "You lose!";
		}else {
			console.log( winrar+ " is the Winner!");
			dom.innerHTML = winrar + " is a Winner!";
		}
	} else if(turns>=9){
		console.log("cat");
		dom.innerHTML = "CAT";
	}
}

//finds open board space for CPU play
function getCPU(){
	if(turns>9){
		return[0,0];
	}	
	var temp_x = 0;
	var temp_y = 0;
	do{
		temp_x = Math.round((Math.random()*10))%3;
		temp_y = Math.round((Math.random()*10))%3;
	//	console.log( temp_x + " " + temp_y);

	} while( buttons[temp_x][temp_y].value != "_");
	return [temp_x, temp_y];
}

var onLoad = function(){
	createBoard();
}

window.addEventListener("load",onLoad);

































