var input1 = document.getElementsByClassName("color1")[0];
var input2 = document.getElementsByClassName("color2")[0];
var radialGradient = document.getElementsByClassName("select2")[0];
var linearGradient = document.getElementsByClassName("select1")[0];
var body = document.querySelector("body");
var css =  document.querySelector("h3");



//Radial GRadient
radialGradient.addEventListener('click',
	function (){
    function setGradient(){
              
			  body.style.backgroundImage = 
			  "radial-gradient(circle,"
			  + input1.value
			  +","+ 
			  input2.value
			  + ")";

			  css.textContent = body.style.backgroundImage +";";
    }
 


	input1.addEventListener('input', setGradient);

	input2.addEventListener('input', setGradient);
}

);

// Linear gradient
linearGradient.addEventListener("click",
function(){
  function setGradient(){

			  body.style.backgroundImage = 
			  "linear-gradient(to right,"
			  
			  + input1.value
			  +","+ 
			  input2.value
			  + ")";

			  css.textContent = body.style.backgroundImage +";";
		
  }
input1.addEventListener('input', setGradient);
	
input2.addEventListener('input', setGradient);
}

);












	










	