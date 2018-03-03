var counter = 1;

var ageLimit = 18;

function nameFunction(){
	
	if ( counter !== 2){
		var x = document.createElement('INPUT');
		x.setAttribute("number","text");
		x.setAttribute("placeholder", "what is your age?");
		x.setAttribute("id", "age");
		x.setAttribute("onkeypress", "handEvent(event,'age')");
		document.getElementById("dynamicInput").appendChild(x);
		counter++;
	}
}

function ageFunction(){
	if ( counter !== 3){
		var input = document.getElementById("age").value;
		if (parseFloat(input) >= 18){	
			var x = document.createElement('INPUT');
			x.setAttribute("number","text");
			x.setAttribute("id","brand");
			x.setAttribute("placeholder", "what brand do you like?");
			x.setAttribute("onkeypress", "handEvent(event,'brand')");
			document.getElementById("dynamicInput").appendChild(x);
			counter++;
		}else{
		   var input = document.getElementById("age").value;
		   if (parseFloat(input) <= 18){	
				var x = document.createElement('INPUT');
				x.setAttribute("number","text");
				x.setAttribute("id","brand");
				x.setAttribute("placeholder", "What Brand of Chocolate do you like?");
				x.setAttribute("onkeypress", "handEvent(event,'brand')");
				document.getElementById("dynamicInput").appendChild(x);
				counter++;
			
		}
	}
}}

function brandFunction(){
	if (counter !== 4){
		var brand = document.getElementById("brand").value;
		var x = document.createElement('INPUT');
		x.setAttribute("number","text");
		x.setAttribute("placeholder", brand +" ,thats so nice,Where do you Live?");
		x.setAttribute("onkeypress", "handEvent(event,'live')");
		document.getElementById("dynamicInput").appendChild(x);
		counter++;
	}
}


function liveFunction(){
	if (counter !== 5){
		var x = document.createElement('INPUT');
		x.setAttribute("number","text");
	    x.setAttribute("id","de");
		x.setAttribute("placeholder", "How would you claim your free Price? delivery or pickup?");
		x.setAttribute("onkeypress", "handEvent(event,'claim')");
		document.getElementById("dynamicInput").appendChild(x);
		counter++;
	}
}

function claiMethod(){
	if (counter !== 6){	
		var delivery = document.getElementById("de").value;
		if (delivery="pickup"){
			var x = document.createElement('INPUT');
			x.setAttribute("number","text");
			x.setAttribute("placeholder", "Type your Phone Number?");
			x.setAttribute("onkeypress", "handEvent(event,'sex')");
			document.getElementById("dynamicInput").appendChild(x);
			counter++;
			
		}else{
			var x = document.createElement('INPUT');
			x.setAttribute("number","text");
			x.setAttribute("placeholder", "Type your Home Address?");
			x.setAttribute("onkeypress", "handEvent(event,'sex')");
			document.getElementById("dynamicInput").appendChild(x);
			counter++;		
			
		}
		
	}
	
}

function sexMethod(){
	if (counter !== 7){
		var x = document.createElement('INPUT');
		x.setAttribute("number","text");
	    x.setAttribute("id","sex");
		x.setAttribute("placeholder", "Are You M or F? so we can identify you?");
		x.setAttribute("onkeypress", "submit()");
		document.getElementById("dynamicInput").appendChild(x);
		counter++;
	}
	
} 

function submit(){
	var name = document.getElementById("ageId").value;
	resetElement();
	document.getElementById("dynamicInput").innerHTML =
	"<p> Hi, "+name+", your free gift will be ready in three days, keep using our service </p>";
}

function resetElement(){
	document.getElementById("myForm").innerHTML = "";
}

function addNewInput(inp){
	if (inp === "name"){	
		nameFunction();
		
	}else if (inp === "age"){
		 ageFunction();
	}else if (inp === "brand"){
		brandFunction();
	}else if (inp === "live"){
		liveFunction();
	}else if (inp === "claim"){
		claiMethod();
	}else if (inp === "sex"){
		sexMethod();
	}

    
}

function handEvent(e,inp){
	var keycode = (e.keyCode ? e.keyCode : e.which);
	if (keycode == '13'){
		addNewInput(inp);
	}
	}

function validateForm() {
	var x = document.forms["myForm"]["myInputs[]"].value;
    if (x == "") {
        alert("fill out all fields");
        return false;
    }
}