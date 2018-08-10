// set count
if(localStorage.getItem("count") == null){
	localStorage.setItem("count", 0)
}

// update count
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

//add one to count
function plusOne(){
	localStorage.setItem("count", Number(localStorage.getItem("count")) + 20);
	update();
}

//reset count
function reset() {
	if (confirm("You sure about that bro? Your minutes will go back to 0.")) {
    	localStorage.setItem("count",0);
		update();
	}
}