console.log("connected!");
var body = document.querySelector("body");
var input_num;

//create title
document.querySelector("title").innerText = " Project 3";

//create user input
var num_input = document.createElement("input");
num_input.type = "number";
num_input.pattern = "[0-9]";
num_input.max = "999999999999999";
body.appendChild(num_input);

//verify user input 
var verify = function(){
    input_num = document.querySelector("input");
    console.log(input_num.value);
    if( input_num.value.toString().length > 15 ) {
        console.log("input too long");
    } else if( input_num.value.toString().includes("e")){
        console.log("input should not contain e");
    }
}

var button = document.createElement("button");
button.innerText = "SUBMIT";
button.addEventListener("click", verify);
body.appendChild(button);

window.addEventListener("keyup", function(e) {
    var key = e.which || e.code;
    if(key == 13){
        verify();
    }
})
