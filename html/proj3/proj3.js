console.log("connected!");

var body = document.querySelector("body");
var input_num;
var access_key = "b1d5f828832403389f1e161a42f63498";
var get_string;
var api_return;

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
    get_string = 'http://apilayer.net/api/validate?access_key=' + access_key 
        + '&number=' + input_num.value;
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




var promise1 = new Promise(function(resolve, reject) {
    //do a thing async
        var httpRequest;
        function makeRequest(){
            httpRequest = new XMLHttpRequest();

            if(!httpRequest) {
                    alert("cannot create an XMLHTTP instance");
            }
            httpRequest.onreadstatechange = alertContents;
            httpRequest.open('GET', get_string );
            httpRequest.send();
        }

        function alertContents() {
            if(httpRequest.readyState == XMLHttpRequest.DONE){
                if(httpRequest.status === 200) {
                    alert(httpRequest.responseText);
                } else {
                    alert("there was a problem with the request");
                }
            }
        }
    //if everything turned out fine
    if(httpRequest!=false){
        api_return = httpRequest;
        resolve("stuff worked!");

    } else {
        reject(Error("It broke!"));
       
    }
});

var promise2 = promise1.then(console.log(api_return));